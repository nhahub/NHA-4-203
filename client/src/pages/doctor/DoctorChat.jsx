import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import DoctorSidebar from '../../components/DoctorSidebar';
import DoctorHeader from '../../components/DoctorHeader';
import { getChatConversations, getChatMessages, getOrCreateChatConversation, sendChatMessage, markChatMessagesRead, getUserAppointments } from '../../services/api';
import './DoctorChat.css';

export default function DoctorChat() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // New States for Appointment Conversation initiation
  const [availableAppointments, setAvailableAppointments] = useState([]);
  const [showStartForm, setShowStartForm] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState('');
  const [startingConversation, setStartingConversation] = useState(false);
  const [startError, setStartError] = useState('');

  useEffect(() => {
    const loadConversationsAndAppointments = async () => {
      try {
        const [{ data: conversationsData }, { data: appointmentsData }] = await Promise.all([
          getChatConversations(),
          getUserAppointments(),
        ]);

        const appointmentOptions = (appointmentsData || [])
          .filter((appointment) => appointment.status !== 'cancelled')
          .map((appointment) => {
            const patientUserId = appointment.patientId?._id || appointment.patientId;
            const patientName = appointment.patientId?.name || 'Patient';
            const appointmentLabel = appointment.bookingId?.slotId?.startTime
              ? `${patientName} • ${appointment.bookingId.slotId.startTime}`
              : `${patientName} • Appointment ${appointment._id.slice(-4)}`;

            return {
              appointmentId: appointment._id,
              patientUserId,
              patientName,
              appointmentLabel,
            };
          });

        setConversations(conversationsData || []);
        setAvailableAppointments(appointmentOptions);

        if (conversationsData?.length) {
          setActiveConversation(conversationsData[0]);
        }
      } catch (err) {
        setError('Failed to load data.');
      } finally {
        setLoading(false);
      }
    };

    loadConversationsAndAppointments();
  }, []);

  useEffect(() => {
    const loadMessages = async () => {
      if (!activeConversation?._id) return;
      try {
        const { data } = await getChatMessages(activeConversation._id);
        setMessages(data || []);
        await markChatMessagesRead(activeConversation._id);
      } catch (err) {
        console.error(err);
      }
    };

    loadMessages();
  }, [activeConversation]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!draft.trim() || !activeConversation?._id) return;

    try {
      const { data } = await sendChatMessage({
        conversationId: activeConversation._id,
        text: draft.trim(),
      });

      setMessages((prev) => [...prev, data]);
      setDraft('');
    } catch (err) {
      setError('Failed to send message.');
    }
  };

  const handleStartConversation = async (e) => {
    e.preventDefault();
    if (!selectedAppointmentId) return;

    setStartingConversation(true);
    setStartError('');

    try {
      const selectedAppointment = availableAppointments.find((item) => item.appointmentId === selectedAppointmentId);
      if (!selectedAppointment) {
        throw new Error('Appointment not found');
      }

      // Reusing the service: passes the patient's ID to the endpoint parameter route
      const { data } = await getOrCreateChatConversation(selectedAppointment.patientUserId, selectedAppointment.appointmentId);
      const exists = conversations.some((conversation) => conversation._id === data._id);

      if (!exists) {
        setConversations((prev) => [data, ...prev]);
      }

      setActiveConversation(data);
      setShowStartForm(false);
      setSelectedAppointmentId('');
    } catch (err) {
      setStartError('Could not start a conversation.');
    } finally {
      setStartingConversation(false);
    }
  };

  const activePartner = useMemo(() => {
    if (!activeConversation) return null;
    return activeConversation.patientId?.name || 'Patient';
  }, [activeConversation]);

  return (
    <div className="doctor-page-wrapper">
      {mobileMenuOpen && (
        <div className="mobile-sidebar-backdrop" onClick={() => setMobileMenuOpen(false)} />
      )}

      <DoctorSidebar activePage="chat" isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <div className="doctor-content">
        <DoctorHeader onMenuClick={() => setMobileMenuOpen(true)} />

        <main className="doctor-main doctor-chat-main">
          <div className="doctor-chat-shell">
            <aside className="doctor-chat-sidebar">
              <div className="doctor-chat-sidebar-header">
                <h2>Patient Messages</h2>
                <p>Secure follow-up conversations</p>
              </div>

              {/* Start Conversation Options Added Below */}
              <button
                type="button"
                className="doctor-chat-start-button"
                onClick={() => setShowStartForm((prev) => !prev)}
                disabled={availableAppointments.length === 0}
              >
                {showStartForm ? 'Cancel' : 'Start new conversation'}
              </button>

              {showStartForm && (
                <form className="doctor-chat-start-form" onSubmit={handleStartConversation}>
                  <select
                    value={selectedAppointmentId}
                    onChange={(e) => setSelectedAppointmentId(e.target.value)}
                  >
                    <option value="">Select an appointment</option>
                    {availableAppointments.map((appointment) => (
                      <option key={appointment.appointmentId} value={appointment.appointmentId}>
                        {appointment.appointmentLabel}
                      </option>
                    ))}
                  </select>
                  <button type="submit" disabled={startingConversation}>
                    {startingConversation ? 'Starting...' : 'Start'}
                  </button>
                </form>
              )}

              {startError && <div className="doctor-chat-error">{startError}</div>}
              <hr className="doctor-chat-divider" />

              {loading ? (
                <div className="doctor-chat-loading">Loading conversations...</div>
              ) : error ? (
                <div className="doctor-chat-error">{error}</div>
              ) : conversations.length === 0 ? (
                <div className="doctor-chat-empty">No conversations yet.</div>
              ) : (
                <div className="doctor-chat-list">
                  {conversations.map((conversation) => {
                    const partner = conversation.patientId?.name || 'Patient';
                    const appointmentLabel = conversation.appointmentId?.bookingId?.slotId?.startTime
                      ? `Appointment • ${conversation.appointmentId.bookingId.slotId.startTime}`
                      : 'Appointment chat';
                    const isActive = activeConversation?._id === conversation._id;
                    return (
                      <button
                        key={conversation._id}
                        className={`doctor-chat-item ${isActive ? 'active' : ''}`}
                        onClick={() => setActiveConversation(conversation)}
                        type="button"
                      >
                        <div className="doctor-chat-item-avatar">{partner.charAt(0).toUpperCase()}</div>
                        <div className="doctor-chat-item-details">
                          <strong>{partner}</strong>
                          <span>{appointmentLabel}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </aside>

            <section className="doctor-chat-panel">
              {!activeConversation ? (
                <div className="doctor-chat-empty-state">Select a conversation to reply.</div>
              ) : (
                <>
                  <div className="doctor-chat-panel-header">
                    <h3>{activePartner}</h3>
                    <p>{activeConversation?.appointmentId?.bookingId?.slotId?.startTime || 'Secure in-app messaging'}</p>
                  </div>

                  <div className="doctor-chat-messages">
                    {messages.map((message) => {
                      const isMine = message.senderId?._id === user?._id || message.senderId === user?._id;
                      return (
                        <div key={message._id} className={`doctor-chat-bubble ${isMine ? 'mine' : 'other'}`}>
                          <p>{message.text}</p>
                        </div>
                      );
                    })}
                  </div>

                  <form className="doctor-chat-form" onSubmit={handleSend}>
                    <input
                      type="text"
                      placeholder="Write a reply"
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                    />
                    <button type="submit">Send</button>
                  </form>
                </>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}