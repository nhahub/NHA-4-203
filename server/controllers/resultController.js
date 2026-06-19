const LabResult = require('../models/LabResult');
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');
const multer = require('multer');
const path = require('path');

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// POST /api/results/upload (patient only)
const uploadResult = async (req, res) => {
  try {
    const { recordId, doctorId, testName } = req.body;

    const result = await LabResult.create({
      recordId,
      patientId: req.user._id,
      doctorId,
      testName,
      fileUrl: req.file ? `/uploads/${req.file.filename}` : '',
      status: 'pending',
    });

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET /api/results/doctor/all (doctor only)
const getDoctorResults = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ userId: req.user._id });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor profile not found' });
    }

    const results = await LabResult.find({ doctorId: doctor._id })
      .populate('patientId', 'name email profilePicture')
      .populate('recordId')
      .sort({ uploadedAt: -1 });

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// PUT /api/results/:id/status (doctor only)
const updateResultStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ['pending', 'reviewed', 'urgent'];
    if (!allowed.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const doctor = await Doctor.findOne({ userId: req.user._id });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor profile not found' });
    }

    const result = await LabResult.findOneAndUpdate(
      { _id: req.params.id, doctorId: doctor._id },
      { status },
      { new: true }
    ).populate('patientId', 'name email profilePicture');

    if (!result) {
      return res.status(404).json({ message: 'Lab result not found' });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET /api/results/:patientId (auth)
const getPatientResults = async (req, res) => {
  try {
    const results = await LabResult.find({ patientId: req.params.patientId })
      .populate('recordId')
      .populate({
        path: 'doctorId',
        populate: { path: 'userId', select: 'name' },
      })
      .sort({ uploadedAt: -1 });

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { upload, uploadResult, getDoctorResults, updateResultStatus, getPatientResults };
