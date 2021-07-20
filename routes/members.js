const express = require('express')
const Router = express.Router()
const { createMember, getAllMembers, updateMember } = require('../controllers/MembersController')
const verifyToken = require('../middlewares/verifyToken')
const checkAdmin = require('../middlewares/checkAdmin')
const validateMember = require('../validations/MembersValidation')

// falta poner los middlewares de seguridad
Router.get('/', [verifyToken, checkAdmin], getAllMembers);
Router.post('/', [verifyToken, checkAdmin, validateMember], createMember);
Router.put('/:id', [verifyToken, validateMember], updateMember);

module.exports = Router