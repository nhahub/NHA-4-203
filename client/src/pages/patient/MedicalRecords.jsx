import { useState, useEffect } from 'react';
import { getPatientRecords } from '../../services/api';
import useAuth from '../../hooks/useAuth';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './MedicalRecords.css';

export default function MedicalRecords() {
  const { user } = useAuth();
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const { data } = await getPatientRecords(user._id);
        setRecords(data.records || data || []);
      } catch (err) {
        setError('Failed to load medical records.');
      } finally {
        setLoading(false);
      }
    };
    if (user?._id) fetchRecords();
  }, [user]);

  return (
    <div className="records-page">
      <Navbar />
      <main className="records-main">
        <h1 className="records-title">Medical Records</h1>
        <p className="records-subtitle">Your complete health history in one place</p>

        {loading ? (
          <div className="spinner-container"><div className="spinner" /></div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : records.length > 0 ? (
          <div className="records-list">
            {records.map((rec, i) => (
              <div key={rec._id || i} className="records-item">
                <div className="records-item-icon">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div className="records-item-info">
                  <p className="records-item-title">
                    {rec.diagnosis || rec.title || 'Record'}
                  </p>
                  <p className="records-item-meta">
                    {rec.doctorId?.specialty || ''} —{' '}
                    {new Date(rec.createdAt).toLocaleDateString()}
                  </p>
                </div>
                {rec.prescription && (
                  <span className="records-item-badge">Prescription</span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="records-empty">
            <span className="material-symbols-outlined">folder_off</span>
            <p>No medical records found.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
