const Slot = require('../models/Slot');
const Doctor = require('../models/Doctor');

// POST /api/slots (doctor only)
// Doctor creates available time slots for appointments (e.g., 10am-11am on Monday)
const createSlot = async (req, res) => {
  try {
    const { startTime, endTime } = req.body;

    // Get the doctor profile associated with this user
    const doctor = await Doctor.findOne({ userId: req.user._id });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor profile not found' });
    }

    // Create new slot (not yet booked)
    const slot = await Slot.create({
      doctorId: doctor._id,
      startTime,
      endTime,
    });

    res.status(201).json(slot);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET /api/slots/:doctorId
// Get all available (unbooked) time slots for a specific doctor
// Used by patients to see when they can book an appointment
const getAvailableSlots = async (req, res) => {
  try {
    // Find slots that belong to this doctor and haven't been booked yet
    const slots = await Slot.find({
      doctorId: req.params.doctorId,
      isBooked: false,
    });

    res.status(200).json(slots);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// DELETE /api/slots/:id (doctor only)
// Doctor can delete a time slot (e.g., if running late or unavailable)
// Only works if slot hasn't been booked yet
const deleteSlot = async (req, res) => {
  try {
    const slot = await Slot.findById(req.params.id);
    if (!slot) {
      return res.status(404).json({ message: 'Slot not found' });
    }

    // Verify this doctor owns this slot (security check)
    const doctor = await Doctor.findOne({ userId: req.user._id });
    if (!doctor || slot.doctorId.toString() !== doctor._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this slot' });
    }

    await Slot.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Slot deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createSlot, getAvailableSlots, deleteSlot };
