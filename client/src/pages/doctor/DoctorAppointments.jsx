import { useState, useEffect } from 'react';
import { getUserAppointments, updateAppointmentStatus } from '../../services/api';
import DoctorSidebar from '../../components/DoctorSidebar';
import DoctorHeader from '../../components/DoctorHeader';
import AppointmentCard from '../../components/AppointmentCard';
import './Doctor.css';
import './DoctorAppointments.css';

export default function DoctorAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [tab, setTab] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleStatusUpdate = async (id, status) => {
    try {
      await updateAppointmentStatus(id, status);
      setAppointments((prev) =>
        prev.map((a) => (a._id === id ? { ...a, status } : a))
      );
    } catch (err) {
      setError('Failed to update status.');
    }
  };

  const filtered =
    tab === 'all' ? appointments : appointments.filter((a) => a.status === tab);
  const tabs = ['all', 'pending', 'confirmed', 'completed', 'cancelled'];

  return (
    <div className="doctor-page-wrapper">
      {mobileMenuOpen && (
        <div 
          className="mobile-sidebar-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      <DoctorSidebar 
        activePage="appointments" 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
      
      <div className="doctor-content">
        <DoctorHeader onMenuClick={() => setMobileMenuOpen(true)} />
        
        <main className="doctor-main doc-appt-main">
          <h1 className="doc-appt-title" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Appointments</h1>

          <div className="doc-appt-tabs">
            {tabs.map((t) => (
              <button
                key={t}
                className={`doc-appt-tab${tab === t ? ' active' : ''}`}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div style={{ background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            {loading ? (
              <div className="doctor-spinner-container"><div className="doctor-spinner" /></div>
            ) : error ? (
              <div className="error-message">{error}</div>
            ) : filtered.length > 0 ? (
              <div className="doc-appt-list">
                {filtered.map((a) => (
                  <AppointmentCard
                    key={a._id}
                    appointment={a}
                    role="doctor"
                    onStatusUpdate={handleStatusUpdate}
                  />
                ))}
              </div>
            ) : (
              <p className="doc-appt-empty">No appointments found.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
