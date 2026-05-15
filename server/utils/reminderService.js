// A simple service to handle sending reminders
const sendReminder = async (appointmentId) => {
  // Logic to find appointment, user, doctor and send email/SMS would go here
  console.log(`Reminder sent for appointment: ${appointmentId}`);
};

module.exports = { sendReminder };
