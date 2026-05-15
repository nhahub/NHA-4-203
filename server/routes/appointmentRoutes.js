const express = require('express');
const router = express.Router();
const {
  getUserAppointments,
  updateAppointmentStatus,
} = require('../controllers/appointmentController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.get('/user', authMiddleware, getUserAppointments);
router.put('/:id/status', authMiddleware, roleMiddleware(['doctor']), updateAppointmentStatus);

module.exports = router;
