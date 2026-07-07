const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = function initializeSocket(io) {
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth?.token || socket.handshake.headers.authorization?.split(' ')[1];

      if (!token) {
        return next(new Error('Authentication error'));
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select('-password');

      if (!user) {
        return next(new Error('Authentication error'));
      }

      socket.user = user;
      next();
    } catch (error) {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    socket.on('joinConversation', (conversationId) => {
      if (conversationId) {
        socket.join(conversationId);
      }
    });

    socket.on('sendMessage', (payload) => {
      if (payload?.conversationId) {
        io.to(payload.conversationId).emit('receiveMessage', payload);
      }
    });

    socket.on('markRead', (payload) => {
      if (payload?.conversationId) {
        io.to(payload.conversationId).emit('messagesRead', payload);
      }
    });
  });
};
