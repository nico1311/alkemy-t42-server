const express = require('express')
const Router = express.Router()
const {
	createMember,
	getAllMembers,
	deleteMember
} = require('../controllers/MembersController')
const verifyToken = require('../middlewares/verifyToken')
const checkAdmin = require('../middlewares/checkAdmin')

// falta poner los middlewares de seguridad
Router.get('/', [verifyToken, checkAdmin], getAllMembers)
Router.post('/', [verifyToken, checkAdmin], createMember)
Router.delete('/:id', [verifyToken, checkAdmin], deleteMember)

module.exports = Router