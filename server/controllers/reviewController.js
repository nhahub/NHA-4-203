const Review = require('../models/Review');
const Doctor = require('../models/Doctor');

// Helper: recalculate doctor rating
const recalculateDoctorRating = async (doctorId) => {
  const reviews = await Review.find({ doctorId });
  const count = reviews.length;
  const avg = count > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / count : 0;

  await Doctor.findByIdAndUpdate(doctorId, {
    rating: Math.round(avg * 10) / 10,
    reviewsCount: count,
  });
};

// POST /api/reviews/:doctorId (patient only)
const createReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const review = await Review.create({
      doctorId: req.params.doctorId,
      patientId: req.user._id,
      rating,
      comment,
    });

    await recalculateDoctorRating(req.params.doctorId);

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET /api/reviews/:doctorId
const getDoctorReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ doctorId: req.params.doctorId })
      .populate('patientId', 'name');

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// DELETE /api/reviews/:id (admin only)
const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    const doctorId = review.doctorId;
    await Review.findByIdAndDelete(req.params.id);
    await recalculateDoctorRating(doctorId);

    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createReview, getDoctorReviews, deleteReview, recalculateDoctorRating };
