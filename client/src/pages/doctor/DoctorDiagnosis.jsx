import { useState } from 'react';
import DoctorSidebar from '../../components/DoctorSidebar';
import DoctorHeader from '../../components/DoctorHeader';
import './Doctor.css';

export default function DoctorDiagnosis() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="doctor-page-wrapper">
      {mobileMenuOpen && (
        <div 
          className="mobile-sidebar-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      <DoctorSidebar 
        activePage="diagnosis" 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
      
      <div className="doctor-content">
        <DoctorHeader onMenuClick={() => setMobileMenuOpen(true)} />
        
        <main className="doctor-main">
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Diagnosis</h1>
          
          <div style={{ background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <p>Diagnosis functionality coming soon...</p>
          </div>
        </main>
      </div>
    </div>
  );
}
