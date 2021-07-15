const express = require('express')
const Router = express.Router()
const { createMember, getMember } = require('../controllers/MembersController')
const verifyToken = require('../middlewares/verifyToken')
const checkAdmin = require('../middlewares/checkAdmin')

// falta poner los middlewares de seguridad
Router.get('/', verifyToken, getMember)
Router.post('/', createMember)

module.exports = Router