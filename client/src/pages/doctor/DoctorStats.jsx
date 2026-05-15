import { useState, useEffect } from 'react';
import { getUserAppointments } from '../../services/api';
import DoctorSidebar from '../../components/DoctorSidebar';
import DoctorHeader from '../../components/DoctorHeader';
import './Doctor.css';
import './DoctorStats.css';

export default function DoctorStats() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUserAppointments();
        setAppointments(data.appointments || data || []);
      } catch (err) {
        /* ignore */
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const total = appointments.length;
  const completed = appointments.filter((a) => a.status === 'completed').length;
  const cancelled = appointments.filter((a) => a.status === 'cancelled').length;
  const rate = total > 0 ? ((completed / total) * 100).toFixed(1) : 0;

  return (
    <div className="doctor-page-wrapper">
      {mobileMenuOpen && (
        <div 
          className="mobile-sidebar-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      <DoctorSidebar 
        activePage="stats" 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
      
      <div className="doctor-content">
        <DoctorHeader onMenuClick={() => setMobileMenuOpen(true)} />
        
        <main className="doctor-main doc-stats-main">
          <h1 className="doc-stats-title" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Statistics</h1>

          {loading ? (
            <div className="doctor-spinner-container"><div className="doctor-spinner" /></div>
          ) : (
            <div className="doc-stats-grid">
              <div className="doc-stats-card">
                <div className="doc-stats-card-header">
                  <div className="doc-stats-card-icon blue">
                    <span className="material-symbols-outlined">calendar_month</span>
                  </div>
                  <span className="doc-stats-card-label">Total Appointments</span>
                </div>
                <p className="doc-stats-card-value">{total}</p>
              </div>

              <div className="doc-stats-card">
                <div className="doc-stats-card-header">
                  <div className="doc-stats-card-icon green">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <span className="doc-stats-card-label">Completion Rate</span>
                </div>
                <p className="doc-stats-card-value">{rate}%</p>
              </div>

              <div className="doc-stats-card">
                <div className="doc-stats-card-header">
                  <div className="doc-stats-card-icon green">
                    <span className="material-symbols-outlined">task_alt</span>
                  </div>
                  <span className="doc-stats-card-label">Completed</span>
                </div>
                <p className="doc-stats-card-value">{completed}</p>
              </div>

              <div className="doc-stats-card">
                <div className="doc-stats-card-header">
                  <div className="doc-stats-card-icon red">
                    <span className="material-symbols-outlined">cancel</span>
                  </div>
                  <span className="doc-stats-card-label">Cancelled</span>
                </div>
                <p className="doc-stats-card-value">{cancelled}</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
