const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})

// static signup method
userSchema.statics.signup = async function( name, email, password, role) {

  // validation
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
//   if (!validator.isStrongPassword(password)) {
//     throw Error('Password not strong enough')
//   }
  if (!validator.isStrongPassword(password)) {
    const errorMessage = "Password not strong enough. Please ensure that your password is at least 8 characters long, contains at least one uppercase letter, one lowercase letter, one number, and one special symbol.";
    throw new Error(errorMessage);
  }
}


  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ name, email, password: hash, role})

  return user
}

// static login method
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  // console.log('****************')
  // console.log(user)
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

// console.log('**********7777777777*')
  return user
}

module.exports = mongoose.model('User', userSchema)
