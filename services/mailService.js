const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
/**
 * This function is a wrapper to send mail with a provider of that service.
 * @function sendMail
 * @async
 * @param {Object} messageTo - Object to send a message from provider mail service.
 * @example
 * const sendMail = require('services/mailService.js);
 *
 * const msg = {
 *   to: 'test@example.com',
 *   from: 'test@example.com', // Use the email address or domain you verified above
 *   subject: 'Sending with Twilio SendGrid is Fun',
 *   text: 'and easy to do anywhere, even with Node.js',
 *   html: '<strong>and easy to do anywhere, even with Node.js</strong>'
 * };
 *
 * sendMail(msg);
 * @example
 * const sendMail = require('services/mailService.js);
 *
 * sendMail({
 *   to: 'Some One <someone@example.org>', //Email address with name
 *   from: 'test@example.com', // Use the email address or domain you verified above
 *   subject: 'Sending with Twilio SendGrid is Fun',
 *   text: 'and easy to do anywhere, even with Node.js',
 *   html: '<strong>and easy to do anywhere, even with Node.js</strong>'
 * });
 */
const sendMail = async ({ to, from, subject, text, html }) => {
  try {
    await sgMail.send({ to, from, subject, text, html });
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

module.exports = sendMail;
