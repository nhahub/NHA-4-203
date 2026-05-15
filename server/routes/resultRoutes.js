const express = require('express');
const router = express.Router();
const { upload, uploadResult, getPatientResults } = require('../controllers/resultController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.post('/upload', authMiddleware, roleMiddleware(['patient']), upload.single('file'), uploadResult);
router.get('/:patientId', authMiddleware, getPatientResults);

module.exports = router;
