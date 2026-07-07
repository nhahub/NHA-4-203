import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import DoctorSidebar from '../../components/DoctorSidebar';
import DoctorHeader from '../../components/DoctorHeader';
import { getChatConversations, getChatMessages, sendChatMessage, markChatMessagesRead } from '../../services/api';
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

  useEffect(() => {
    const loadConversations = async () => {
      try {
        const { data } = await getChatConversations();
        setConversations(data || []);
        if (data?.length) {
          setActiveConversation(data[0]);
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
                          <span>{conversation.lastMessage || 'Start a conversation'}</span>
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
                    <p>Respond securely from your portal</p>
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
