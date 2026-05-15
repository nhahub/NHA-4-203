const LabResult = require('../models/LabResult');
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
      fileUrl: req.file ? req.file.path : '',
    });

    res.status(201).json(result);
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
      });

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { upload, uploadResult, getPatientResults };
