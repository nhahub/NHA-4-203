import { useState, useEffect } from 'react';
import { getUserAppointments } from '../../services/api';
import useAuth from '../../hooks/useAuth';
import DoctorSidebar from '../../components/DoctorSidebar';
import DoctorHeader from '../../components/DoctorHeader';
import AppointmentCard from '../../components/AppointmentCard';
import './Doctor.css';
import './DoctorDashboard.css';

export default function DoctorDashboard() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUserAppointments();
        setAppointments(data.appointments || data || []);
      } catch (err) {
        setError('Failed to load data.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const today = appointments.filter(
    (a) => a.status === 'confirmed' || a.status === 'pending'
  );
  const stats = {
    total: appointments.length,
    pending: appointments.filter((a) => a.status === 'pending').length,
    completed: appointments.filter((a) => a.status === 'completed').length,
  };

  return (
    <div className="doctor-page-wrapper">
      {mobileMenuOpen && (
        <div 
          className="mobile-sidebar-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      <DoctorSidebar 
        activePage="dashboard" 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
      
      <div className="doctor-content">
        <DoctorHeader onMenuClick={() => setMobileMenuOpen(true)} />
        
        <main className="doctor-main doc-dash-main">
          <h1 className="doc-dash-title">Doctor Dashboard</h1>
          <p className="doc-dash-subtitle">
            Welcome back, Dr. {user?.name || 'Doctor'}. Here is your overview for today.
          </p>

          {/* KPI Cards */}
          <div className="doc-dash-stats">
            <div className="doc-dash-stat-card">
              <div className="doc-dash-stat-header">
                <div className="doc-dash-stat-icon blue">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <span className="doc-dash-stat-label">Total Patients</span>
              </div>
              <p className="doc-dash-stat-value">{stats.total}</p>
            </div>
            <div className="doc-dash-stat-card">
              <div className="doc-dash-stat-header">
                <div className="doc-dash-stat-icon amber">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <span className="doc-dash-stat-label">Pending</span>
              </div>
              <p className="doc-dash-stat-value">{stats.pending}</p>
            </div>
            <div className="doc-dash-stat-card">
              <div className="doc-dash-stat-header">
                <div className="doc-dash-stat-icon green">
                  <span className="material-symbols-outlined">task_alt</span>
                </div>
                <span className="doc-dash-stat-label">Completed</span>
              </div>
              <p className="doc-dash-stat-value">{stats.completed}</p>
            </div>
          </div>

          {/* Schedule */}
          <div style={{ background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h2 className="doc-dash-section-title" style={{ margin: 0 }}>Today's Schedule</h2>
            </div>
            {loading ? (
              <div className="doctor-spinner-container"><div className="doctor-spinner" /></div>
            ) : error ? (
              <div className="error-message">{error}</div>
            ) : today.length > 0 ? (
              <div className="doc-dash-list">
                {today.map((a) => (
                  <AppointmentCard key={a._id} appointment={a} role="doctor" />
                ))}
              </div>
            ) : (
              <p className="doc-dash-empty">No appointments scheduled.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
