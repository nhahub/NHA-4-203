import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const user = await register({ name, email, password, phone, role: 'patient' });
      // Redirect based on role
      if (user.role === 'admin') navigate('/admin/dashboard');
      else if (user.role === 'doctor') navigate('/doctor/dashboard');
      else navigate('/patient/dashboard');
    } catch (err) {
      setError(
        err.response?.data?.message || 'Registration failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      {/* Decorative Blobs */}
      <div className="register-blob register-blob-tl" />
      <div className="register-blob register-blob-br" />
      <div className="register-blob register-blob-center" />

      <div className="register-wrapper">
        {/* Logo */}
        <div className="register-logo">
          <Link to="/" className="register-logo-inner">
            <span className="material-symbols-outlined">local_hospital</span>
            <span className="register-logo-text">EasyCare</span>
          </Link>
        </div>

        {/* Card */}
        <div className="register-card">
          <div className="register-heading">
            <h1>Create your account</h1>
            <p>Join EasyCare as a patient and manage your health journey</p>
          </div>

          {/* Error Message */}
          {error && <div className="error-message">{error}</div>}

          <form className="register-form" onSubmit={handleSubmit}>

            {/* Full Name */}
            <div className="register-field">
              <label className="register-label" htmlFor="register-name">
                FULL NAME
              </label>
              <div className="register-input-wrapper">
                <span className="material-symbols-outlined">person</span>
                <input
                  id="register-name"
                  className="register-input"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="register-field">
              <label className="register-label" htmlFor="register-email">
                EMAIL ADDRESS
              </label>
              <div className="register-input-wrapper">
                <span className="material-symbols-outlined">mail</span>
                <input
                  id="register-email"
                  className="register-input"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="register-field">
              <label className="register-label" htmlFor="register-phone">
                PHONE NUMBER
              </label>
              <div className="register-input-wrapper">
                <span className="material-symbols-outlined">phone</span>
                <input
                  id="register-phone"
                  className="register-input"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="register-field">
              <label className="register-label" htmlFor="register-password">
                PASSWORD
              </label>
              <div className="register-input-wrapper">
                <span className="material-symbols-outlined">lock</span>
                <input
                  id="register-password"
                  className="register-input"
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="register-submit"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
              {!loading && (
                <span className="material-symbols-outlined">arrow_forward</span>
              )}
            </button>
          </form>

          {/* Login Link */}
          <p className="register-login-link">
            Already have an account?{' '}
            <Link to="/login">Sign In</Link>
          </p>
        </div>

        {/* Footer Links */}
        <div className="register-footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help Center</a>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="register-bottom-gradient" />
    </div>
  );
}
