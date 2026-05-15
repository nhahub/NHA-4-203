import { useState } from 'react';
import { getPatientRecords } from '../../services/api';
import DoctorSidebar from '../../components/DoctorSidebar';
import DoctorHeader from '../../components/DoctorHeader';
import './Doctor.css';
import './DoctorSearch.css';

export default function DoctorPatientRecords() {
  const [patientId, setPatientId] = useState('');
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!patientId.trim()) return;
    setLoading(true);
    setError('');
    setSearched(true);
    try {
      const { data } = await getPatientRecords(patientId.trim());
      setRecords(data.records || data || []);
    } catch (err) {
      setError('No records found or invalid patient ID.');
      setRecords([]);
    } finally {
      setLoading(false);
    }
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
        activePage="records" 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
      
      <div className="doctor-content">
        <DoctorHeader onMenuClick={() => setMobileMenuOpen(true)} />
        
        <main className="doctor-main doc-search-main">
          <h1 className="doc-search-title" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Patient Records</h1>

          <div style={{ background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <form className="doc-search-form" onSubmit={handleSearch}>
              <input
                className="doc-search-input"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
                placeholder="Enter Patient ID"
              />
              <button type="submit" className="doc-search-btn">Search</button>
            </form>

            {loading ? (
              <div className="doctor-spinner-container"><div className="doctor-spinner" /></div>
            ) : error ? (
              <div className="error-message">{error}</div>
            ) : records.length > 0 ? (
              <div className="doc-search-list">
                {records.map((rec, i) => (
                  <div key={rec._id || i} className="doc-search-item">
                    <p className="doc-search-item-title">
                      {rec.diagnosis || rec.title || 'Record'}
                    </p>
                    <p className="doc-search-item-meta">
                      {new Date(rec.createdAt).toLocaleDateString()}
                    </p>
                    {rec.notes && (
                      <p className="doc-search-item-notes">{rec.notes}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : searched ? (
              <p className="doc-search-empty">No records found for this patient.</p>
            ) : null}
          </div>
        </main>
      </div>
    </div>
  );
}
