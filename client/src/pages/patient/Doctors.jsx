import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getDoctors } from '../../services/api';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DoctorCard from '../../components/DoctorCard';
import './Doctors.css';

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('search') || '');
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [specialty, setSpecialty] = useState('');

  // Debounce: update committed search 400ms after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(inputValue);
      setSearchParams(inputValue ? { search: inputValue } : {});
    }, 400);
    return () => clearTimeout(timer);
  }, [inputValue]);

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      setError('');
      try {
        const params = {};
        if (search) params.search = search;
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
  }, [search, specialty]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(inputValue);
    setSearchParams(inputValue ? { search: inputValue } : {});
  };

  return (
    <div className="doctors-page">
      <Navbar />
      <main className="doctors-main">
        <div className="doctors-header">
          <h1>Find Your Doctor</h1>
          <p>Browse our verified specialists and book your appointment</p>
        </div>

        <form className="doctors-search-bar" onSubmit={handleSearch}>
          <div className="doctors-search-wrap">
            <span className="material-symbols-outlined">search</span>
            <input
                name="search"
                type="text"
                placeholder="Search by doctor name..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
          </div>
          <select className="doctors-filter-select" value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
            <option value="">All Specialties</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Neurology">Neurology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="General Practice">General Practice</option>
          </select>
          <button type="submit" className="doctors-search-btn">Search</button>
        </form>

        {loading ? (
          <div className="spinner-container"><div className="spinner" /></div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : doctors.length > 0 ? (
          <div className="doctors-grid">
            {doctors.map((doc) => (
              <DoctorCard key={doc._id} doctor={doc} />
            ))}
          </div>
        ) : (
          <div className="doctors-empty">
            <span className="material-symbols-outlined">person_off</span>
            <p>No doctors found. Try adjusting your search.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
