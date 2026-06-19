import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDoctor, getSlots, createBooking } from '../../services/api';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './BookAppointment.css';

export default function BookAppointment() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [docRes, slotRes] = await Promise.all([
          getDoctor(doctorId),
          getSlots(doctorId),
        ]);
        setDoctor(docRes.data.doctor || docRes.data);
        setSlots(slotRes.data.slots || slotRes.data || []);
      } catch (err) {
        setError('Failed to load booking data.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [doctorId]);

  const handleBook = async () => {
    if (!selectedSlot) {
      setError('Please select a time slot.');
      return;
    }
    setBooking(true);
    setError('');
    try {
      await createBooking({ doctorId, slotId: selectedSlot._id || selectedSlot, notes });
      setSuccess('Appointment booked successfully!');
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Booking failed.');
    } finally {
      setBooking(false);
    }
  };

  const name = doctor?.userId?.name || 'Doctor';

  return (
    <div className="book-page">
      <Navbar />
      <main className="book-main">
        <h1 className="book-title">Book Appointment</h1>

        {loading ? (
          <div className="spinner-container"><div className="spinner" /></div>
        ) : (
          <>
            {/* Doctor Info */}
            {doctor && (
              <div className="book-doctor-card">
                <div className="book-doctor-avatar">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <p className="book-doctor-name">{name}</p>
                  <p className="book-doctor-specialty">{doctor.specialty}</p>
                </div>
              </div>
            )}

            {/* Time Slots */}
            <div className="book-section">
              <h2 className="book-section-title">Select a Time Slot</h2>
              {slots.length > 0 ? (
                <div className="book-slots-grid">
                  {slots.map((slot, i) => {
                    const id = slot._id || i;
                    const isSelected = selectedSlot?._id === id || selectedSlot === id;
                    return (
                      <button
                        key={id}
                        className={`book-slot-btn${isSelected ? ' selected' : ''}`}
                        onClick={() => setSelectedSlot(slot)}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '16px', marginRight: '4px', verticalAlign: 'middle' }}>schedule</span>
                        {slot.startTime} - {slot.endTime}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <p className="book-slots-empty">No available slots at the moment.</p>
              )}
            </div>

            {/* Notes */}
            <div className="book-section">
              <label className="book-notes-label">Notes (optional)</label>
              <textarea
                className="book-notes-input"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any additional notes for the doctor..."
              />
            </div>

            {error && <div className="error-message">{error}</div>}
            {success && <div className="book-success">{success}</div>}

            <button
              className="book-submit-btn"
              onClick={handleBook}
              disabled={booking || !selectedSlot}
            >
              {booking ? 'Booking...' : 'Confirm Booking'}
            </button>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
