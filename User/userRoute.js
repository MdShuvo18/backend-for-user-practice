const express = require('express')
const { register } = require('./userController')
const route = express.Router()

route.post('/register', register)

module.exports = route;