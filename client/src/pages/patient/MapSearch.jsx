import { useState, useEffect } from 'react';
import { getDoctors } from '../../services/api';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DoctorCard from '../../components/DoctorCard';
import './MapSearch.css';

export default function MapSearch() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [specialty, setSpecialty] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const params = {};
        if (specialty) params.specialty = specialty;
        const { data } = await getDoctors(params);
        setDoctors(data.doctors || data || []);
      } catch (err) {
        setError('Failed to load doctors.');
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, [specialty]);

  return (
    <div className="map-page">
      <Navbar />
      <main className="map-main">
        <h1 className="map-title">Find Doctors Near You</h1>
        <p className="map-subtitle">Search by specialty and location</p>

        <div className="map-filter">
          <select
            className="map-filter-select"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          >
            <option value="">All Specialties</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Neurology">Neurology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Pediatrics">Pediatrics</option>
          </select>
        </div>

        {loading ? (
          <div className="spinner-container"><div className="spinner" /></div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : doctors.length > 0 ? (
          <div className="map-grid">
            {doctors.map((doc) => (
              <DoctorCard key={doc._id} doctor={doc} />
            ))}
          </div>
        ) : (
          <p className="map-empty">No doctors found.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
