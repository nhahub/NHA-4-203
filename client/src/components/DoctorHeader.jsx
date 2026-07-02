import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import NotificationDropdown from './NotificationDropdown';
import './DoctorHeader.css';

const API_BASE = 'http://localhost:5000';

function formatDoctorName(name) {
  if (!name) return 'Doctor';
  if (/^dr\.?\s/i.test(name.trim())) return name.trim();
  return `${name}`;
}

export default function DoctorHeader({ onMenuClick }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const getAvatarSrc = () => {
    if (!user?.profilePicture) return '';
    if (user.profilePicture.startsWith('http')) return user.profilePicture;
    return `${API_BASE}${user.profilePicture}`;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    navigate(`/doctor/records?search=${encodeURIComponent(q)}`);
  };

  return (
    <header className="doctor-header">
      <div className="doctor-header-left">
        <button className="doctor-mobile-menu-btn" onClick={onMenuClick}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <form className="doctor-search-bar" onSubmit={handleSearch}>
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            placeholder="Search patients, records, or appointments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>

      <div className="doctor-header-right">
        <NotificationDropdown />
        <button
          className="doctor-header-icon-btn"
          onClick={() => navigate('/doctor/settings')}
          title="Settings"
        >
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="doctor-header-divider" />
        <div className="doctor-profile-info">
          <div className="doctor-profile-text">
            <p className="doctor-profile-name">{formatDoctorName(user?.name)}</p>
            <p className="doctor-profile-role">Medical Provider</p>
          </div>
          {user?.profilePicture ? (
            <img
              src={getAvatarSrc()}
              alt="Doctor Profile"
              className="doctor-profile-avatar-img"
            />
          ) : (
            <div className="doctor-profile-avatar-fallback">
              {user?.name?.charAt(0)?.toUpperCase() || 'D'}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
