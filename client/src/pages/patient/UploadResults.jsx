import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPatientRecords, getPatientResults, uploadResult, getUserAppointments } from '../../services/api';
import useAuth from '../../hooks/useAuth';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './UploadResults.css';

export default function UploadResults() {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const fileInputRef = useRef(null);

  // Form state
  const [testName, setTestName] = useState('');
  const [selectedAppointmentId, setSelectedAppointmentId] = useState('');
  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState('');
  const [uploadError, setUploadError] = useState('');

  // Data
  const [records, setRecords] = useState([]);
  const [results, setResults] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [recRes, resRes, apptRes] = await Promise.all([
          getPatientRecords(user._id),
          getPatientResults(user._id),
          getUserAppointments(),
        ]);
        const recData = recRes.data.records || recRes.data || [];
        setRecords(recData);
        const resData = resRes.data.results || resRes.data || [];
        setResults(resData);
        const apptData = apptRes.data.appointments || apptRes.data || [];
        setAppointments(apptData);

        // Pre-select related appointment if recordId was supplied in query params
        const recordIdFromParam = searchParams.get('recordId');
        if (recordIdFromParam) {
          const matchingRec = recData.find(r => r._id === recordIdFromParam);
          if (matchingRec) {
            const apptId = matchingRec.appointmentId?._id || matchingRec.appointmentId;
            setSelectedAppointmentId(apptId);
          }
        }
      } catch (err) {
        console.error('Failed to load data:', err);
      } finally {
        setLoadingData(false);
      }
    };
    if (user?._id) fetchData();
  }, [user, searchParams]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };
  const handleDragLeave = () => setDragOver(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadError('');
    setUploadSuccess('');

    if (!testName.trim()) {
      setUploadError('Please enter a test name.');
      return;
    }
    if (!selectedAppointmentId) {
      setUploadError('Please select a related appointment.');
      return;
    }
    if (!file) {
      setUploadError('Please select a file to upload.');
      return;
    }

    const selectedRecord = records.find(rec => {
      const recApptId = rec.appointmentId?._id || rec.appointmentId;
      return recApptId === selectedAppointmentId;
    });

    if (!selectedRecord) {
      setUploadError('No medical record found for the selected appointment.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('testName', testName.trim());
    formData.append('recordId', selectedRecord._id);
    formData.append('doctorId', selectedRecord?.doctorId?._id || searchParams.get('doctorId') || '');

    setUploading(true);
    try {
      const { data } = await uploadResult(formData);
      setResults(prev => [data, ...prev]);
      setUploadSuccess('Lab result uploaded successfully!');
      setTestName('');
      setFile(null);
      setSelectedAppointmentId('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err) {
      setUploadError(err.response?.data?.message || 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const getFileIcon = (url) => {
    if (!url) return 'description';
    const lower = url.toLowerCase();
    if (lower.endsWith('.pdf')) return 'picture_as_pdf';
    if (lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.png')) return 'image';
    return 'description';
  };

  const getFileIconColor = (url) => {
    if (!url) return 'icon-amber';
    const lower = url.toLowerCase();
    if (lower.endsWith('.pdf')) return 'icon-blue';
    if (lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.png')) return 'icon-teal';
    return 'icon-amber';
  };

  return (
    <div className="upload-page">
      <Navbar />
      <main className="upload-main">
        <div className="upload-grid">
          {/* Left Column: Upload Interface */}
          <div className="upload-left">
            <div className="upload-header">
              <h1 className="upload-title">Upload Lab Results</h1>
              <p className="upload-subtitle">
                Securely share your laboratory reports with your medical team for faster diagnosis.
              </p>
            </div>

            {/* Drag & Drop Zone */}
            <div
              className={`upload-dropzone ${dragOver ? 'drag-active' : ''} ${file ? 'has-file' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="upload-dropzone-icon">
                <span className="material-symbols-outlined">
                  {file ? 'check_circle' : 'cloud_upload'}
                </span>
              </div>
              {file ? (
                <>
                  <h3 className="upload-dropzone-heading">{file.name}</h3>
                  <p className="upload-dropzone-meta">
                    {(file.size / 1024).toFixed(1)} KB — Click to change
                  </p>
                </>
              ) : (
                <>
                  <h3 className="upload-dropzone-heading">Drag and drop files here</h3>
                  <p className="upload-dropzone-meta">
                    Supported formats: PDF, JPEG, PNG (Max 10MB per file)
                  </p>
                </>
              )}
              <button
                type="button"
                className="upload-dropzone-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                Browse Files
              </button>
              <input
                type="file"
                ref={fileInputRef}
                className="upload-file-input-hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
              />
            </div>

            {/* Form Details */}
            <form className="upload-form-card" onSubmit={handleSubmit}>
              <h4 className="upload-form-heading">Report Details</h4>

              {uploadSuccess && (
                <div className="upload-alert success">
                  <span className="material-symbols-outlined">check_circle</span>
                  {uploadSuccess}
                </div>
              )}
              {uploadError && (
                <div className="upload-alert error">
                  <span className="material-symbols-outlined">error</span>
                  {uploadError}
                </div>
              )}

              <div className="upload-form-grid">
                <div className="upload-form-field">
                  <label className="upload-form-label">Test Name</label>
                  <input
                    type="text"
                    className="upload-form-input"
                    placeholder="e.g. Comprehensive Blood Panel"
                    value={testName}
                    onChange={(e) => setTestName(e.target.value)}
                  />
                </div>
                <div className="upload-form-field">
                  <label className="upload-form-label">Related Appointment</label>
                  <select
                    className="upload-form-select"
                    value={selectedAppointmentId}
                    onChange={(e) => setSelectedAppointmentId(e.target.value)}
                  >
                    <option value="">Select an appointment</option>
                    {appointments
                      .filter(appt => records.some(rec => (rec.appointmentId?._id || rec.appointmentId) === appt._id))
                      .map(appt => {
                        const docName = appt.doctorId?.userId?.name || 'Doctor';
                        const dateObj = appt.bookingId?.bookedAt || appt.createdAt;
                        const formattedDate = dateObj ? new Date(dateObj).toLocaleDateString() : '';
                        return (
                          <option key={appt._id} value={appt._id}>
                            Appointment on {formattedDate} with Dr. {docName} ({appt.doctorId?.specialty || 'Specialist'})
                          </option>
                        );
                      })
                    }
                  </select>
                </div>
              </div>

              <div className="upload-form-actions">
                <button
                  type="submit"
                  className="upload-submit-btn"
                  disabled={uploading}
                >
                  {uploading ? (
                    <>
                      <span className="spinner-small" /> Uploading...
                    </>
                  ) : (
                    'Complete Upload'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Recently Uploaded */}
          <div className="upload-right">
            <div className="upload-right-header">
              <h2 className="upload-right-title">Recently Uploaded</h2>
            </div>

            {loadingData ? (
              <div className="upload-right-loading">
                <span className="spinner-small" /> Loading...
              </div>
            ) : results.length > 0 ? (
              <div className="upload-results-list">
                {results.map(res => (
                  <div key={res._id} className="upload-result-card">
                    <div className={`upload-result-icon-box ${getFileIconColor(res.fileUrl)}`}>
                      <span className="material-symbols-outlined">{getFileIcon(res.fileUrl)}</span>
                    </div>
                    <div className="upload-result-info">
                      <h5 className="upload-result-name">{res.testName}</h5>
                      <p className="upload-result-date">
                        Uploaded on {new Date(res.uploadedAt || res.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </p>
                    </div>
                    {res.fileUrl && (
                      <a
                        href={`http://localhost:5000/${res.fileUrl.replace(/\\/g, '/')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="upload-result-action"
                        title="Download"
                      >
                        <span className="material-symbols-outlined">download</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="upload-results-empty">
                <span className="material-symbols-outlined">folder_off</span>
                <p>No results uploaded yet.</p>
              </div>
            )}

            {/* Privacy Info Box */}
            <div className="upload-info-box">
              <div className="upload-info-row">
                <span className="material-symbols-outlined">info</span>
                <div>
                  <p className="upload-info-title">Privacy & Security</p>
                  <p className="upload-info-text">
                    Your data is encrypted end-to-end. Only your designated healthcare providers can access these files.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
