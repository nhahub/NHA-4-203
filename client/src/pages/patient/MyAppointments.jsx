import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './MyAppointments.css';

export default function MyAppointments() {
  return (
    <div className="my-appointments-page">
      <Navbar />
      <main className="my-appointments-main">
        {/* Header Section */}
        <div className="my-appointments-header">
          <div>
            <h1 className="my-appointments-title">My Appointments</h1>
            <p className="my-appointments-subtitle">Manage your clinical visits and healthcare schedule in one place.</p>
          </div>
          {/* Tab Navigation */}
          <div className="my-appointments-tabs-container">
            <button className="my-appointments-tab active">Upcoming</button>
            <button className="my-appointments-tab">Past</button>
            <button className="my-appointments-tab">Cancelled</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
