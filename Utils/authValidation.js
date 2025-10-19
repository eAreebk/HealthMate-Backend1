import User from '../models/User.js'

export const validateRegister = async (name, email, password, phone) => {
  if (!name || !email || !password || !phone) {
    return 'All fields required'
  }
  
  if (password.length < 6) {
    return 'Password must be at least 6 characters'
  }
  
  if (!email.includes('@')) {
    return 'Invalid email format'
  }
  
  const existingUser = await User.findOne({ email })
  if (existingUser) {
    return 'Email already exists'
  }
  
  return null
}

export const validateLogin = async (email, password) => {
  if (!email || !password) {
    return 'Email and password required'
  }
  
  if (password.length < 6) {
    return 'Password must be at least 6 characters'
  }
  
  if (!email.includes('@')) {
    return 'Invalid email format'
  }
  
  const user = await User.findOne({ email })
  if (!user) {
    return 'Invalid email'
  }
  
  if (user.password !== password) {
    return 'Invalid password'
  }
  
  return null
}