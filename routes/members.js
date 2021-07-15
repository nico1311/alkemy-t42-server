const express = require('express')
const Router = express.Router()
const { createMember } = require('../controllers/MembersController')
const verifyToken = require('../middlewares/verifyToken')
const checkAdmin = require('../middlewares/checkAdmin')

// falta poner los middlewares de seguridad
Router.post('/', createMember)

module.exports = Router