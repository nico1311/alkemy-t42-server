const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const contactsRouter = require('./contacts');
const publicDataRouter = require('./publicData');
const testimonialsRouter = require('./testimonials');
const usersRouter = require('./users');

router.use('/auth', authRouter);
router.use('/contacts', contactsRouter);
router.use('/organizations/1/public', publicDataRouter);
router.use('/testimonials', testimonialsRouter);
router.use('/users', usersRouter);

module.exports = router;
