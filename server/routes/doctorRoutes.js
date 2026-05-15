const express = require('express');
const router = express.Router();
const {
  createDoctor,
  getDoctors,
  getNearbyDoctors,
  getDoctorById,
  updateDoctorProfile,
} = require('../controllers/doctorController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.post('/', authMiddleware, roleMiddleware(['doctor']), createDoctor);
router.get('/', getDoctors);
router.get('/nearby', getNearbyDoctors);
router.get('/:id', getDoctorById);
router.put('/:id/profile', authMiddleware, roleMiddleware(['doctor']), updateDoctorProfile);

module.exports = router;
