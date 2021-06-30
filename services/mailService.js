const sgMail = require('@sendgrid/mail');
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
 * @example
 * // Example with express.
 * router.post('/api/mail', async (req, res) => {
 * const { to, subject, text, html } = req.body;
 *
 * const msg = {
 *   to,
 *   from: 'YourVerifySenderIdentity@gmail.com',
 *   subject,
 *   text,
 *   html,
 * };
 *
 * try {
 *   await sendMail(msg);
 * } catch (err) {
 *   return res.status(err.code).send(err.message);
 * }
 *
 * res.status(201).send({ success: true });
 * });
 */
const sendMail = async ({
  to,
  from,
  subject,
  text,
  html,
  sandboxMode = false
}) => {
  // First conditional to test, set an API KEY on .env file.
  if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    try {
      await sgMail.send({
        to,
        from,
        subject,
        text,
        html,
        mail_settings: {
          sandbox_mode: {
            enable: sandboxMode // Setting sandbox to tests.
          }
        }
      });
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  } else {
    console.log('Error: Mail Service "SendGrid", do not have an API KEY.');
  }
};

module.exports = sendMail;
