const Conversation = require('../models/Conversation');
const Message = require('../models/Message');
const User = require('../models/User');
const Appointment = require('../models/Appointment');

const getOrCreateConversation = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const { appointmentId } = req.body;

    if (!doctorId) {
      return res.status(400).json({ message: 'Doctor ID is required' });
    }

    const doctor = await User.findById(doctorId);
    if (!doctor || doctor.role !== 'doctor') {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    let appointment = null;
    if (appointmentId) {
      appointment = await Appointment.findOne({
        _id: appointmentId,
        patientId: req.user._id,
      }).populate({
        path: 'doctorId',
        populate: { path: 'userId', select: '_id' },
      });

      if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
    }

    const targetDoctorId = appointment?.doctorId?.userId?._id || appointment?.doctorId?.userId || doctorId;

    let conversation = await Conversation.findOne({
      patientId: req.user._id,
      appointmentId: appointment?._id || undefined,
    });

    if (!conversation) {
      conversation = await Conversation.create({
        patientId: req.user._id,
        doctorId: targetDoctorId,
        appointmentId: appointment?._id,
      });
    }

    await conversation.populate('patientId', 'name email profilePicture role');
    await conversation.populate('doctorId', 'name email profilePicture role');
    await conversation.populate('appointmentId');

    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getConversations = async (req, res) => {
  try {
    const query = req.user.role === 'patient'
      ? { patientId: req.user._id }
      : { doctorId: req.user._id };

    const conversations = await Conversation.find(query)
      .sort({ lastMessageAt: -1 })
      .populate('patientId', 'name email profilePicture role')
      .populate('doctorId', 'name email profilePicture role')
      .populate('appointmentId');

    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getConversationMessages = async (req, res) => {
  try {
    const { conversationId } = req.params;

    const conversation = await Conversation.findById(conversationId);
    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }

    const isParticipant =
      conversation.patientId.toString() === req.user._id.toString() ||
      conversation.doctorId.toString() === req.user._id.toString();

    if (!isParticipant) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const messages = await Message.find({ conversationId })
      .sort({ createdAt: 1 })
      .populate('senderId', 'name profilePicture role');

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const sendMessage = async (req, res) => {
  try {
    const { conversationId, text } = req.body;

    if (!conversationId || !text?.trim()) {
      return res.status(400).json({ message: 'Conversation ID and message text are required' });
    }

    const conversation = await Conversation.findById(conversationId);
    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }

    const isParticipant =
      conversation.patientId.toString() === req.user._id.toString() ||
      conversation.doctorId.toString() === req.user._id.toString();

    if (!isParticipant) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const receiverId = conversation.patientId.toString() === req.user._id.toString()
      ? conversation.doctorId
      : conversation.patientId;

    const message = await Message.create({
      conversationId,
      senderId: req.user._id,
      receiverId,
      text: text.trim(),
    });

    conversation.lastMessage = text.trim();
    conversation.lastMessageAt = new Date();

    if (req.user.role === 'patient') {
      conversation.unreadCountDoctor += 1;
    } else {
      conversation.unreadCountPatient += 1;
    }

    await conversation.save();

    const populatedMessage = await Message.findById(message._id).populate('senderId', 'name profilePicture role');

    res.status(201).json(populatedMessage);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const markMessagesAsRead = async (req, res) => {
  try {
    const { conversationId } = req.params;

    const conversation = await Conversation.findById(conversationId);
    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }

    const isParticipant =
      conversation.patientId.toString() === req.user._id.toString() ||
      conversation.doctorId.toString() === req.user._id.toString();

    if (!isParticipant) {
      return res.status(403).json({ message: 'Access denied' });
    }

    if (req.user.role === 'patient') {
      conversation.unreadCountPatient = 0;
    } else {
      conversation.unreadCountDoctor = 0;
    }

    await conversation.save();

    await Message.updateMany(
      {
        conversationId,
        receiverId: req.user._id,
        read: false,
      },
      { read: true }
    );

    res.status(200).json({ message: 'Messages marked as read' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getOrCreateConversation,
  getConversations,
  getConversationMessages,
  sendMessage,
  markMessagesAsRead,
};
