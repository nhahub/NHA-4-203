import { useState } from 'react';
import { getPatientResults } from '../../services/api';
import DoctorSidebar from '../../components/DoctorSidebar';
import DoctorHeader from '../../components/DoctorHeader';
import './Doctor.css';
import './DoctorSearch.css';

export default function DoctorResults() {
  const [patientId, setPatientId] = useState('');
  const [results, setResults] = useState([]);
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
      const { data } = await getPatientResults(patientId.trim());
      setResults(data.results || data || []);
    } catch (err) {
      setError('No results found.');
      setResults([]);
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
        activePage="results" 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
      
      <div className="doctor-content">
        <DoctorHeader onMenuClick={() => setMobileMenuOpen(true)} />
        
        <main className="doctor-main doc-search-main">
          <h1 className="doc-search-title" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Lab Results Review</h1>

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
            ) : results.length > 0 ? (
              <div className="doc-search-list">
                {results.map((res, i) => (
                  <div key={res._id || i} className="doc-search-item">
                    <div className="doc-search-item-row">
                      <span className="material-symbols-outlined doc-search-item-icon">
                        lab_panel
                      </span>
                      <div className="doc-search-item-info">
                        <p className="doc-search-item-title">
                          {res.testName || 'Lab Result'}
                        </p>
                        <p className="doc-search-item-meta">
                          {new Date(res.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : searched ? (
              <p className="doc-search-empty">No results found.</p>
            ) : null}
          </div>
        </main>
      </div>
    </div>
  );
}
