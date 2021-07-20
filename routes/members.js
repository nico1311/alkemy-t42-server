const express = require('express')
const Router = express.Router()
const { createMember, getAllMembers } = require('../controllers/MembersController')
const verifyToken = require('../middlewares/verifyToken')
const checkAdmin = require('../middlewares/checkAdmin')
const validateMember = require('../validations/MembersValidation')

// falta poner los middlewares de seguridad
Router.get('/', [verifyToken, checkAdmin], getAllMembers)
Router.post('/', [verifyToken, checkAdmin, validateMember], createMember)

module.exports = Router