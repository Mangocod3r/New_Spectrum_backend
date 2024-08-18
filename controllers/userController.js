const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)
    console.log(user.role)
    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token, "role":user.role, "name":user.name})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {name, email, password, passwordConfirmation, role} = req.body
  console.log(name,email, role);

  try {
    const user = await User.signup(name, email, password, passwordConfirmation, role)

    // create a token
    const token = createToken(user._id)

    // res.status(200).json({ name, email, token, role: user.passwordConfirmation });
    res.status(200).json({name, email, token, role})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const getUserDetails = async (req, res) => {
  const { email } = req.params

  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.status(200).json({ name: user.name, email: user.email, role: user.role })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { signupUser, loginUser, getUserDetails }
