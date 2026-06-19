const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');

// GET /api/appointments/user (auth)
// Returns appointments specific to the logged-in user (patient sees their appointments, doctors see their scheduled appointments)
const getUserAppointments = async (req, res) => {
  try {
    let query = {};

    // Role-based filtering - each user only sees their own relevant appointments
    if (req.user.role === 'patient') {
      query = { patientId: req.user._id };
    } else if (req.user.role === 'doctor') {
      // For doctors, need to find their Doctor record first (different from User)
      const doctor = await Doctor.findOne({ userId: req.user._id });
      if (!doctor) {
        return res.status(404).json({ message: 'Doctor profile not found' });
      }
      query = { doctorId: doctor._id };
    }

    // Populate related data - patient info, doctor info, and booking/slot details
    // This gives us all the info we need to display appointment on frontend
    const appointments = await Appointment.find(query)
      .populate('patientId', 'name email profilePicture phone')
      .populate({
        path: 'doctorId',
        select: 'specialty clinic userId',
        populate: { path: 'userId', select: 'name email profilePicture' } // Get doctor's actual name from User collection
      })
      .populate({
        path: 'bookingId',
        populate: { path: 'slotId' } // Get slot details (date, time)
      });

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// PUT /api/appointments/:id/status (doctor only)
const updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getUserAppointments, updateAppointmentStatus };
