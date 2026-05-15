const MedicalRecord = require('../models/MedicalRecord');
const Prescription = require('../models/Prescription');

// POST /api/records (doctor only)
const createRecord = async (req, res) => {
  try {
    const { appointmentId, patientId, doctorId, diagnosis, testsRequired, visitDate, prescriptions } = req.body;

    const record = await MedicalRecord.create({
      appointmentId,
      patientId,
      doctorId,
      diagnosis,
      testsRequired,
      visitDate,
    });

    let createdPrescriptions = [];
    if (prescriptions && prescriptions.length > 0) {
      const prescriptionDocs = prescriptions.map((p) => ({
        appointmentId,
        patientId,
        medicineName: p.medicineName,
        dosageNotes: p.dosageNotes,
      }));
      createdPrescriptions = await Prescription.insertMany(prescriptionDocs);
    }

    res.status(201).json({ record, prescriptions: createdPrescriptions });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET /api/records/:patientId (auth)
const getPatientRecords = async (req, res) => {
  try {
    const records = await MedicalRecord.find({ patientId: req.params.patientId })
      .populate('appointmentId')
      .populate({
        path: 'doctorId',
        populate: { path: 'userId', select: 'name' },
      });

    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET /api/prescriptions/:appointmentId (auth)
const getPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find({ appointmentId: req.params.appointmentId });
    res.status(200).json(prescriptions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createRecord, getPatientRecords, getPrescriptions };
