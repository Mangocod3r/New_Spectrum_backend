const express = require('express')

// controller functions
const { loginUser, signupUser, getUserDetails } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

router.get('/user/:email', getUserDetails)

module.exports = router
