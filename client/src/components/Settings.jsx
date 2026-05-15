import { useState, useEffect, useRef } from 'react';
import useAuth from '../hooks/useAuth';
import * as api from '../services/api';

// Shared
import './Settings.css';

// Patient wrappers
import Navbar from './Navbar';
import Footer from './Footer';

// Doctor wrappers
import DoctorSidebar from './DoctorSidebar';
import DoctorHeader from './DoctorHeader';

// Admin wrappers
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

const API_BASE = 'http://localhost:5000';

export default function Settings() {
  const { user, updateUser } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const fileInputRef = useRef(null);

  // Profile Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [avatarUploading, setAvatarUploading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileMessage, setProfileMessage] = useState({ text: '', type: '' });

  // Password Form State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState({ text: '', type: '' });

  // Fetch initial profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.getProfile();
        setName(data.name || '');
        setPhone(data.phone || '');
        setProfilePicture(data.profilePicture || '');
      } catch (error) {
        console.error('Failed to load profile');
      }
    };
    fetchProfile();
  }, []);

  const getAvatarSrc = () => {
    if (!profilePicture) return '';
    if (profilePicture.startsWith('http')) return profilePicture;
    return `${API_BASE}${profilePicture}`;
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setAvatarUploading(true);
    setProfileMessage({ text: '', type: '' });
    try {
      const formData = new FormData();
      formData.append('avatar', file);
      const { data } = await api.uploadAvatar(formData);
      setProfilePicture(data.profilePicture);
      updateUser({ profilePicture: data.profilePicture });
      setProfileMessage({ text: 'Profile picture updated!', type: 'success' });
      setTimeout(() => setProfileMessage({ text: '', type: '' }), 3000);
    } catch (err) {
      setProfileMessage({
        text: err.response?.data?.message || 'Failed to upload image.',
        type: 'error',
      });
    } finally {
      setAvatarUploading(false);
      // Reset file input so the same file can be re-selected
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleRemoveAvatar = async () => {
    setAvatarUploading(true);
    setProfileMessage({ text: '', type: '' });
    try {
      const { data } = await api.updateProfile({ name, phone, profilePicture: '' });
      setProfilePicture('');
      updateUser({ profilePicture: '' });
      setProfileMessage({ text: 'Profile picture removed.', type: 'success' });
      setTimeout(() => setProfileMessage({ text: '', type: '' }), 3000);
    } catch (err) {
      setProfileMessage({
        text: err.response?.data?.message || 'Failed to remove image.',
        type: 'error',
      });
    } finally {
      setAvatarUploading(false);
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setProfileLoading(true);
    setProfileMessage({ text: '', type: '' });
    try {
      const { data } = await api.updateProfile({ name, phone, profilePicture });
      updateUser({ name: data.name, phone: data.phone, profilePicture: data.profilePicture });
      setProfileMessage({ text: 'Profile updated successfully!', type: 'success' });
      setTimeout(() => setProfileMessage({ text: '', type: '' }), 3000);
    } catch (err) {
      setProfileMessage({
        text: err.response?.data?.message || 'Failed to update profile.',
        type: 'error',
      });
    } finally {
      setProfileLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordMessage({ text: 'New passwords do not match.', type: 'error' });
      return;
    }
    setPasswordLoading(true);
    setPasswordMessage({ text: '', type: '' });
    try {
      await api.changePassword({ currentPassword, newPassword });
      setPasswordMessage({ text: 'Password changed successfully!', type: 'success' });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setPasswordMessage({ text: '', type: '' }), 3000);
    } catch (err) {
      setPasswordMessage({
        text: err.response?.data?.message || 'Failed to change password.',
        type: 'error',
      });
    } finally {
      setPasswordLoading(false);
    }
  };

  const renderContent = () => (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Account Settings</h1>
        <p>Manage your profile preferences and account security.</p>
      </div>

      <div className="settings-tabs">
        <button
          className={`settings-tab ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <span className="material-symbols-outlined">person</span>
          Profile
        </button>
        <button
          className={`settings-tab ${activeTab === 'security' ? 'active' : ''}`}
          onClick={() => setActiveTab('security')}
        >
          <span className="material-symbols-outlined">security</span>
          Security
        </button>
      </div>

      <div className="settings-content">
        {activeTab === 'profile' && (
          <form className="settings-form" onSubmit={handleProfileSubmit}>
            {profileMessage.text && (
              <div className={`settings-alert ${profileMessage.type}`}>
                {profileMessage.text}
              </div>
            )}
            
            <div className="settings-form-group">
              <label>Profile Picture</label>
              <div className="settings-avatar-upload">
                <div className="avatar-upload-preview">
                  {profilePicture ? (
                    <img src={getAvatarSrc()} alt="Profile preview" className="avatar-preview-img" />
                  ) : (
                    <div className="avatar-preview-placeholder">
                      {name?.charAt(0)?.toUpperCase() || 'U'}
                    </div>
                  )}
                </div>
                <div className="avatar-upload-actions">
                  <div className="avatar-upload-btns">
                    <button
                      type="button"
                      className="avatar-upload-btn"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={avatarUploading}
                    >
                      <span className="material-symbols-outlined">upload</span>
                      {avatarUploading ? 'Uploading...' : 'Choose Image'}
                    </button>
                    {profilePicture && (
                      <button
                        type="button"
                        className="avatar-remove-btn"
                        onClick={handleRemoveAvatar}
                        disabled={avatarUploading}
                      >
                        <span className="material-symbols-outlined">delete</span>
                        Remove
                      </button>
                    )}
                  </div>
                  <span className="settings-help-text">JPG, PNG, GIF or WebP. Max 5MB.</span>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/gif,image/webp"
                  onChange={handleAvatarChange}
                  style={{ display: 'none' }}
                />
              </div>
            </div>

            <div className="settings-form-row">
              <div className="settings-form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="settings-form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className="settings-form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={user?.email || ''}
                disabled
                className="disabled-input"
              />
              <span className="settings-help-text">Email cannot be changed here.</span>
            </div>

            <div className="settings-form-actions">
              <button type="submit" className="settings-btn-primary" disabled={profileLoading}>
                {profileLoading ? 'Saving...' : 'Save Profile Changes'}
              </button>
            </div>
          </form>
        )}

        {activeTab === 'security' && (
          <form className="settings-form" onSubmit={handlePasswordSubmit}>
            {passwordMessage.text && (
              <div className={`settings-alert ${passwordMessage.type}`}>
                {passwordMessage.text}
              </div>
            )}

            <div className="settings-form-group">
              <label>Current Password</label>
              <input
                type="password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
              />
            </div>

            <div className="settings-form-group">
              <label>New Password</label>
              <input
                type="password"
                required
                minLength={6}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="At least 6 characters"
              />
            </div>

            <div className="settings-form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                required
                minLength={6}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
              />
            </div>

            <div className="settings-form-actions">
              <button type="submit" className="settings-btn-primary" disabled={passwordLoading}>
                {passwordLoading ? 'Updating...' : 'Update Password'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  // Wrapper Selection based on Role
  if (user?.role === 'admin') {
    return (
      <div className="admin-page-wrapper bg-background font-body-md text-on-surface">
        {mobileMenuOpen && (
          <div className="mobile-sidebar-backdrop" onClick={() => setMobileMenuOpen(false)} />
        )}
        <AdminSidebar activePage="settings" isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        <div className="admin-content">
          <AdminHeader onMenuClick={() => setMobileMenuOpen(true)} />
          <main className="admin-main dashboard-main" style={{ padding: '2rem' }}>
            <div className="dashboard-container">{renderContent()}</div>
          </main>
        </div>
      </div>
    );
  }

  if (user?.role === 'doctor') {
    return (
      <div className="doctor-page-wrapper">
        {mobileMenuOpen && (
          <div className="mobile-sidebar-backdrop" onClick={() => setMobileMenuOpen(false)} />
        )}
        <DoctorSidebar activePage="settings" isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        <div className="doctor-content">
          <DoctorHeader onMenuClick={() => setMobileMenuOpen(true)} />
          <main className="doctor-main" style={{ padding: '2rem' }}>
            {renderContent()}
          </main>
        </div>
      </div>
    );
  }

  // Fallback / Patient view
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
}
