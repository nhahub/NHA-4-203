import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getChatConversations, getChatMessages, getOrCreateChatConversation, sendChatMessage, markChatMessagesRead, getUserAppointments } from '../../services/api';
import './Chat.css';

export default function Chat() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [availableAppointments, setAvailableAppointments] = useState([]);
  const [showStartForm, setShowStartForm] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState('');
  const [startingConversation, setStartingConversation] = useState(false);
  const [startError, setStartError] = useState('');

  useEffect(() => {
    const loadConversations = async () => {
      try {
        const [{ data: conversationsData }, { data: appointmentsData }] = await Promise.all([
          getChatConversations(),
          getUserAppointments(),
        ]);

        const appointmentOptions = (appointmentsData || [])
          .filter((appointment) => appointment.status !== 'cancelled')
          .map((appointment) => {
            const doctorUserId = appointment.doctorId?.userId?._id || appointment.doctorId?.userId || appointment.doctorId?._id;
            const doctorName = appointment.doctorId?.userId?.name || appointment.doctorId?.name || 'Doctor';
            const appointmentLabel = appointment.bookingId?.slotId?.startTime
              ? `${doctorName} • ${appointment.bookingId.slotId.startTime}`
              : `${doctorName} • Appointment ${appointment._id.slice(-4)}`;

            return {
              appointmentId: appointment._id,
              doctorUserId,
              doctorName,
              appointmentLabel,
            };
          });

        setConversations(conversationsData || []);
        setAvailableAppointments(appointmentOptions);

        if (conversationsData?.length) {
          setActiveConversation(conversationsData[0]);
        }
      } catch (err) {
        setError('Failed to load conversations.');
      } finally {
        setLoading(false);
      }
    };

    loadConversations();
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

      const { data } = await getOrCreateChatConversation(selectedAppointment.doctorUserId, selectedAppointment.appointmentId);
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
    return activeConversation.doctorId?.name || activeConversation.patientId?.name || 'Conversation';
  }, [activeConversation]);

  return (
    <div className="patient-chat-page">
      <Navbar />
      <main className="patient-chat-main">
        <div className="patient-chat-shell">
          <aside className="patient-chat-sidebar">
            <div className="patient-chat-sidebar-header">
              <h2>Messages</h2>
              <p>Quick follow-ups with your doctor</p>
            </div>

            <button
              type="button"
              className="patient-chat-start-button"
              onClick={() => setShowStartForm((prev) => !prev)}
              disabled={availableAppointments.length === 0}
            >
              {showStartForm ? 'Cancel' : 'Start new conversation'}
            </button>

            {availableAppointments.length === 0 && !loading && (
              <div className="patient-chat-empty">No appointments available to message yet.</div>
            )}

            {showStartForm && (
              <form className="patient-chat-start-form" onSubmit={handleStartConversation}>
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

            {startError && <div className="patient-chat-error">{startError}</div>}

            {loading ? (
              <div className="patient-chat-loading">Loading conversations...</div>
            ) : error ? (
              <div className="patient-chat-error">{error}</div>
            ) : conversations.length === 0 ? (
              <div className="patient-chat-empty">No conversations yet.</div>
            ) : (
              <div className="patient-chat-list">
                {conversations.map((conversation) => {
                  const partner = conversation.doctorId?.name || 'Doctor';
                  const appointmentLabel = conversation.appointmentId?.bookingId?.slotId?.startTime
                    ? `Appointment • ${conversation.appointmentId.bookingId.slotId.startTime}`
                    : 'Appointment chat';
                  const isActive = activeConversation?._id === conversation._id;
                  return (
                    <button
                      key={conversation._id}
                      className={`patient-chat-item ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveConversation(conversation)}
                      type="button"
                    >
                      <div className="patient-chat-item-avatar">
                        {partner.charAt(0).toUpperCase()}
                      </div>
                      <div className="patient-chat-item-details">
                        <strong>{partner}</strong>
                        <span>{appointmentLabel}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </aside>

          <section className="patient-chat-panel">
            {!activeConversation ? (
              <div className="patient-chat-empty-state">Choose a conversation to start chatting.</div>
            ) : (
              <>
                <div className="patient-chat-panel-header">
                  <h3>{activePartner}</h3>
                  <p>{activeConversation?.appointmentId?.bookingId?.slotId?.startTime || 'Secure in-app messaging'}</p>
                </div>

                <div className="patient-chat-messages">
                  {messages.map((message) => {
                    const isMine = message.senderId?._id === user?._id || message.senderId === user?._id;
                    return (
                      <div key={message._id} className={`patient-chat-bubble ${isMine ? 'mine' : 'other'}`}>
                        <p>{message.text}</p>
                      </div>
                    );
                  })}
                </div>

                <form className="patient-chat-form" onSubmit={handleSend}>
                  <input
                    type="text"
                    placeholder="Write a message"
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
      <Footer />
    </div>
  );
}
