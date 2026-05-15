import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const user = await login({ email, password });
      // Redirect based on role
      if (user.role === 'admin') navigate('/admin/dashboard');
      else if (user.role === 'doctor') navigate('/doctor/dashboard');
      else navigate('/patient/dashboard');
    } catch (err) {
      setError(
        err.response?.data?.message || 'Login failed. Please check your credentials.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Decorative Blobs */}
      <div className="login-blob-top" />
      <div className="login-blob-bottom" />

      <div className="login-wrapper">
        {/* Main Card */}
        <div className="login-card">
          <div className="login-card-body">
            {/* Branding */}
            <div className="login-brand">
              <div className="login-brand-logo">
                <div className="login-brand-icon">
                  <span className="material-symbols-outlined">local_hospital</span>
                </div>
                <span className="login-brand-name">EasyCare</span>
              </div>
              <h1 className="login-title">Welcome Back</h1>
              <p className="login-subtitle">
                Sign in to continue managing your health journey
              </p>
            </div>

            {/* Error Message */}
            {error && <div className="error-message">{error}</div>}

            {/* Login Form */}
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-field">
                <label className="login-label" htmlFor="login-email">
                  EMAIL ADDRESS
                </label>
                <div className="login-input-wrapper">
                  <span className="material-symbols-outlined">mail</span>
                  <input
                    id="login-email"
                    className="login-input"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="login-field">
                <div className="login-label-row">
                  <label className="login-label" htmlFor="login-password">
                    PASSWORD
                  </label>
                  <Link to="/forgot-password" className="login-forgot-link">
                    FORGOT?
                  </Link>
                </div>
                <div className="login-input-wrapper">
                  <span className="material-symbols-outlined">lock</span>
                  <input
                    id="login-password"
                    className="login-input"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="login-submit"
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
                {!loading && (
                  <span className="material-symbols-outlined">arrow_forward</span>
                )}
              </button>
            </form>

            {/* Admin Separator */}
            <div className="login-divider">
              <div className="login-divider-line" />
              <span className="login-divider-text">OR</span>
            </div>

            <Link to="/register" className="login-admin-btn">
              <span className="material-symbols-outlined">person_add</span>
              Create New Account
            </Link>
          </div>

          {/* Card Footer */}
          <div className="login-card-footer">
            <p>
              Don&apos;t have an account?{' '}
              <Link to="/register">Sign Up Free</Link>
            </p>
          </div>
        </div>

        {/* Aux Links */}
        <div className="login-aux-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help Center</a>
        </div>
      </div>
    </div>
  );
}
