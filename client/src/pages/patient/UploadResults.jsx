import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './UploadResults.css';

export default function UploadResults() {
  return (
    <div className="upload-page">
      <Navbar />
      <main className="upload-main">
        {/* Header Section */}
        <div className="upload-header">
          <div>
            <h1 className="upload-title">Upload Lab Results</h1>
            <p className="upload-subtitle">Securely share your laboratory reports with your medical team for faster diagnosis.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
