const Doctor = require('../models/Doctor');
const User   = require('../models/User');

// POST /api/doctors (doctor only)
const createDoctor = async (req, res) => {
  try {
    const existingDoctor = await Doctor.findOne({ userId: req.user._id });
    if (existingDoctor) {
      return res.status(400).json({ message: 'Doctor profile already exists for this user' });
    }

    const { specialty, clinic, experience, availableSlots, location } = req.body;

    const doctor = await Doctor.create({
      userId: req.user._id,
      specialty,
      clinic,
      experience,
      availableSlots,
      location,
    });

    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET /api/doctors  — supports ?search= (by name) &specialty= &limit=
const getDoctors = async (req, res) => {
  try {
    const { search, specialty, limit } = req.query;

    const doctorFilter = {};

    // Specialty filter from dropdown (exact, case-insensitive)
    if (specialty) {
      doctorFilter.specialty = { $regex: new RegExp(`^${specialty}$`, 'i') };
    }

    // Name search — find matching User IDs first, then filter doctors
    if (search) {
      const nameRegex = new RegExp(search, 'i');
      const matchingUsers = await User.find({ name: nameRegex }).select('_id');
      const userIds = matchingUsers.map((u) => u._id);
      doctorFilter.userId = { $in: userIds };
    }

    let query = Doctor.find(doctorFilter).populate('userId', 'name email');

    if (limit) query = query.limit(parseInt(limit));

    const doctors = await query;

    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET /api/doctors/nearby
const getNearbyDoctors = async (req, res) => {
  try {
    const { lng, lat, maxDistance } = req.query;

    if (!lng || !lat) {
      return res.status(400).json({ message: 'lng and lat query params are required' });
    }

    const doctors = await Doctor.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          $maxDistance: parseInt(maxDistance) || 10000,
        },
      },
    }).populate('userId', 'name email');

    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET /api/doctors/:id
const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate('userId', 'name email phone');

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// PUT /api/doctors/:id/profile (doctor only)
const updateDoctorProfile = async (req, res) => {
  try {
    const { specialty, clinic, experience, availableSlots, location } = req.body;

    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      { specialty, clinic, experience, availableSlots, location },
      { new: true }
    );

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createDoctor, getDoctors, getNearbyDoctors, getDoctorById, updateDoctorProfile };
