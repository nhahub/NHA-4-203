import useAuth from '../hooks/useAuth';
import './DoctorHeader.css';

const API_BASE = 'http://localhost:5000';

export default function DoctorHeader({ onMenuClick }) {
  const { user } = useAuth();

  const getAvatarSrc = () => {
    if (!user?.profilePicture) return '';
    if (user.profilePicture.startsWith('http')) return user.profilePicture;
    return `${API_BASE}${user.profilePicture}`;
  };

  return (
    <header className="doctor-header">
      <div className="doctor-header-left">
        <button className="doctor-mobile-menu-btn" onClick={onMenuClick}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="doctor-search-bar">
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search patients, records, or appointments..." />
        </div>
      </div>
      
      <div className="doctor-header-right">
        <button className="doctor-header-icon-btn">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div className="doctor-header-divider"></div>
        <div className="doctor-profile-info">
          <div className="doctor-profile-text">
            <p className="doctor-profile-name">Dr. {user?.name || 'Doctor'}</p>
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
