import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDoctor, getDoctorReviews, getSlots } from '../../services/api';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import RatingStars from '../../components/RatingStars';
import './DoctorProfile.css';

export default function DoctorProfile() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [docRes, revRes, slotRes] = await Promise.all([
          getDoctor(id),
          getDoctorReviews(id).catch(() => ({ data: [] })),
          getSlots(id).catch(() => ({ data: [] })),
        ]);
        setDoctor(docRes.data.doctor || docRes.data);
        setReviews(revRes.data.reviews || revRes.data || []);
        setSlots(slotRes.data.slots || slotRes.data || []);
      } catch (err) {
        setError('Failed to load doctor profile.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="doctor-profile-page">
        <Navbar />
        <div className="spinner-container"><div className="spinner" /></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="doctor-profile-page">
        <Navbar />
        <main className="doctor-profile-main">
          <div className="error-message">{error}</div>
        </main>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="doctor-profile-page">
        <Navbar />
        <main className="doctor-profile-main">
          <p>Doctor not found.</p>
        </main>
      </div>
    );
  }

  const name = doctor.userId?.name || 'Doctor';

  return (
    <div className="doctor-profile-page">
      <Navbar />
      <main className="doctor-profile-main">
        {/* Profile Card */}
        <div className="doctor-profile-card">
          <div className="doctor-profile-banner">
            <div className="doctor-profile-avatar">
              <span className="material-symbols-outlined">person</span>
            </div>
          </div>
          <div className="doctor-profile-body">
            <h1 className="doctor-profile-name">{name}</h1>
            <p className="doctor-profile-specialty">
              {doctor.specialty || 'General Practice'}
            </p>
            {doctor.clinic && (
              <p className="doctor-profile-clinic">
                <span className="material-symbols-outlined">location_on</span>
                {doctor.clinic}
              </p>
            )}
            <div className="doctor-profile-rating">
              <RatingStars
                rating={doctor.rating || 0}
                reviewsCount={doctor.reviewsCount}
                size="md"
              />
            </div>
            {doctor.bio && (
              <p className="doctor-profile-bio">{doctor.bio}</p>
            )}
            <Link to={`/patient/book/${id}`} className="doctor-profile-book-btn">
              <span className="material-symbols-outlined">calendar_month</span>
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Available Slots */}
        {slots.length > 0 && (
          <div className="doctor-profile-section">
            <h2 className="doctor-profile-section-title">Available Slots</h2>
            <div className="doctor-profile-slots">
              {slots.slice(0, 12).map((slot, i) => (
                <span key={i} className="doctor-profile-slot-chip">
                  {new Date(slot.date || slot.startTime).toLocaleDateString()}{' '}
                  {slot.time || ''}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Reviews */}
        {reviews.length > 0 && (
          <div className="doctor-profile-section">
            <h2 className="doctor-profile-section-title">Patient Reviews</h2>
            <div className="doctor-profile-reviews">
              {reviews.map((rev, i) => (
                <div key={i} className="doctor-profile-review-card">
                  <div className="doctor-profile-review-header">
                    <span className="doctor-profile-review-name">
                      {rev.patientId?.name || 'Patient'}
                    </span>
                    <RatingStars rating={rev.rating || 0} size="sm" />
                  </div>
                  {rev.comment && (
                    <p className="doctor-profile-review-comment">{rev.comment}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
