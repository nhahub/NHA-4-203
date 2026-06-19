const Slot = require('../models/Slot');
const Booking = require('../models/Booking');
const Appointment = require('../models/Appointment');

// POST /api/bookings (patient only)
// When a patient selects a time slot, this creates the booking and appointment
const createBooking = async (req, res) => {
  try {
    const { slotId, doctorId } = req.body;

    // Check that the slot exists
    const slot = await Slot.findById(slotId);
    if (!slot) {
      return res.status(404).json({ message: 'Slot not found' });
    }

    // Make sure the slot isn't already taken by another patient
    // TODO: Add MongoDB transaction here - currently there's a race condition if two requests come simultaneously
    if (slot.isBooked) {
      return res.status(400).json({ message: 'Slot is already booked' });
    }

    slot.isBooked = true;
    await slot.save();

    const booking = await Booking.create({
      slotId,
      patientId: req.user._id,
      doctorId,
    });

    const appointment = await Appointment.create({
      bookingId: booking._id,
      patientId: req.user._id,
      doctorId,
      status: 'pending',
    });

    res.status(201).json({ booking, appointment });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET /api/bookings/user (auth)
const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ patientId: req.user._id })
      .populate('slotId')
      .populate('doctorId');

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createBooking, getUserBookings };
