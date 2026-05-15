import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUserAppointments } from '../../services/api';
import useAuth from '../../hooks/useAuth';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AppointmentCard from '../../components/AppointmentCard';
import './Dashboard.css';

export default function Dashboard() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUserAppointments();
        setAppointments(data.appointments || data || []);
      } catch (err) {
        setError('Failed to load appointments.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const upcoming = appointments.filter(a => a.status === 'confirmed' || a.status === 'pending');
  const completed = appointments.filter(a => a.status === 'completed');

  return (
    <div className="dashboard-page">
      <Navbar />
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Welcome back, {user?.name || 'Patient'}</h1>
          <p className="dashboard-subtitle">Manage your health journey from one place</p>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-actions">
          <Link to="/doctors" className="dashboard-action-card">
            <div className="dashboard-action-icon blue">
              <span className="material-symbols-outlined">person_search</span>
            </div>
            <span className="dashboard-action-label">Find Doctors</span>
          </Link>
          <Link to="/patient/records" className="dashboard-action-card">
            <div className="dashboard-action-icon green">
              <span className="material-symbols-outlined">description</span>
            </div>
            <span className="dashboard-action-label">Medical Records</span>
          </Link>
          <Link to="/patient/results" className="dashboard-action-card">
            <div className="dashboard-action-icon purple">
              <span className="material-symbols-outlined">cloud_upload</span>
            </div>
            <span className="dashboard-action-label">Upload Results</span>
          </Link>
          <Link to="/patient/map" className="dashboard-action-card">
            <div className="dashboard-action-icon orange">
              <span className="material-symbols-outlined">map</span>
            </div>
            <span className="dashboard-action-label">Map Search</span>
          </Link>
        </div>

        {/* Upcoming Appointments */}
        <h2 className="dashboard-section-title">
          Upcoming Appointments ({upcoming.length})
        </h2>
        {loading ? (
          <div className="spinner-container"><div className="spinner" /></div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : upcoming.length > 0 ? (
          <div className="dashboard-appointment-list">
            {upcoming.map(a => (
              <AppointmentCard key={a._id} appointment={a} role="patient" />
            ))}
          </div>
        ) : (
          <p className="dashboard-empty">
            No upcoming appointments.{' '}
            <Link to="/doctors">Find a doctor</Link>
          </p>
        )}

        {/* Past Appointments */}
        {completed.length > 0 && (
          <>
            <h2 className="dashboard-section-title">
              Past Appointments ({completed.length})
            </h2>
            <div className="dashboard-appointment-list">
              {completed.slice(0, 5).map(a => (
                <AppointmentCard key={a._id} appointment={a} role="patient" />
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
