import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import LogoutModal from './LogoutModal';
import './Navbar.css';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogoutClick = () => {
    setDropdownOpen(false);
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    setMobileOpen(false);
    logout();
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  const renderLinks = () => {
    if (!isAuthenticated) {
      return (
        <>
          <NavLink to="/" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} end onClick={closeMobile}>Home</NavLink>
          <NavLink to="/patient/dashboard" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Dashboard</NavLink>
          <NavLink to="/doctors" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Find Doctors</NavLink>
          <NavLink to="/patient/appointments" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>My Appointments</NavLink>
          <NavLink to="/patient/records" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Medical Records</NavLink>
          <NavLink to="/patient/upload" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Upload Results</NavLink>
        </>
      );
    }

    if (user?.role === 'patient') {
      return (
        <>
          <NavLink to="/" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} end onClick={closeMobile}>Home</NavLink>
          <NavLink to="/patient/dashboard" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Dashboard</NavLink>
          <NavLink to="/doctors" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Find Doctors</NavLink>
          <NavLink to="/patient/appointments" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>My Appointments</NavLink>
          <NavLink to="/patient/records" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Medical Records</NavLink>
          <NavLink to="/patient/upload" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Upload Results</NavLink>
        </>
      );
    }

    if (user?.role === 'doctor') {
      return (
        <>
          <NavLink to="/" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} end onClick={closeMobile}>Home</NavLink>
          <NavLink to="/doctor/dashboard" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Dashboard</NavLink>
          <NavLink to="/doctor/appointments" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Appointments</NavLink>
          <NavLink to="/doctor/records" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Records</NavLink>
          <NavLink to="/doctor/diagnosis" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Diagnosis</NavLink>
        </>
      );
    }

    if (user?.role === 'admin') {
      return (
        <>
          <NavLink to="/admin/dashboard" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Dashboard</NavLink>
          <NavLink to="/admin/users" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Users</NavLink>
          <NavLink to="/admin/doctors" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Doctors</NavLink>
          <NavLink to="/admin/appointments" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Appointments</NavLink>
          <NavLink to="/admin/reviews" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={closeMobile}>Reviews</NavLink>
        </>
      );
    }

    return null;
  };

  const renderActions = () => {
    if (!isAuthenticated) {
      return (
        <div className="navbar-actions-container">
          <Link to="/login" className="navbar-btn-outlined" onClick={closeMobile}>Login</Link>
          <Link to="/register" className="navbar-btn-filled" onClick={closeMobile}>Register</Link>
        </div>
      );
    }

    const handleSettingsClick = () => {
      closeMobile();
      if (user?.role) {
        navigate(`/${user.role}/settings`);
      }
    };

    return (
      <div className="navbar-actions-container">
        <div className="navbar-icon-group">
          <button className="navbar-icon-btn">
            <span className="material-symbols-outlined">notifications</span>
            <span className="navbar-notification-dot"></span>
          </button>
          <button className="navbar-icon-btn" onClick={handleSettingsClick}>
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
        
        <div className="navbar-divider"></div>
        
        <div className="navbar-profile-wrapper" ref={dropdownRef}>
          <div 
            className="navbar-profile-trigger" 
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img 
              alt="User Avatar" 
              className="navbar-profile-avatar" 
              src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "User")}&background=005596&color=fff`} 
            />
            <div className="navbar-profile-info">
              <p className="navbar-profile-name">{user?.name || 'User'}</p>
              <p className="navbar-profile-id">ID: {user?.id ? `PT-${user.id.toString().padStart(5, '0')}` : 'Patient'}</p>
            </div>
            <span className="material-symbols-outlined navbar-profile-icon">expand_more</span>
          </div>

          <div className={`navbar-profile-dropdown ${dropdownOpen ? 'open' : ''}`}>
            <button className="navbar-dropdown-item logout" onClick={handleLogoutClick}>
              <span className="material-symbols-outlined">logout</span>
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          {/* Brand */}
          <Link to="/" className="navbar-brand">
            <div className="navbar-brand-icon">
              <span className="material-symbols-outlined">medical_services</span>
            </div>
            <span className="navbar-brand-text">EasyCare</span>
          </Link>

          {/* Desktop Links */}
          <nav className="navbar-links">
            {renderLinks()}
          </nav>

          {/* Desktop Actions */}
          <div className="navbar-actions">
            {renderActions()}
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="navbar-mobile-menu">
            {renderLinks()}
            <div className="navbar-mobile-actions">
              {renderActions()}
            </div>
          </div>
        )}
      </header>

      <LogoutModal
        isOpen={showLogoutModal}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />
    </>
  );
}
