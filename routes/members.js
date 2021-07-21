const express = require('express')
const Router = express.Router()
const { createMember, getAllMembers, updateMember, deleteMember } = require('../controllers/MembersController')
const verifyToken = require('../middlewares/verifyToken')
const checkAdmin = require('../middlewares/checkAdmin')
const validateMember = require('../validations/MembersValidation')

// falta poner los middlewares de seguridad
Router.get('/', [verifyToken, checkAdmin], getAllMembers);
Router.post('/', [verifyToken, checkAdmin, validateMember], createMember);
Router.put('/:id', [verifyToken, checkAdmin, validateMember], updateMember);
Router.delete('/:id', [verifyToken, checkAdmin], deleteMember);

module.exports = Router
