export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body
    
    const { validateRegister } = await import('../Utils/authValidation.js')
    const { successHandler, errorHandler } = await import('../Utils/responseHandler.js')
    
    const validationError = await validateRegister(name, email, password, phone)
    
    if (validationError) {
      return errorHandler(res, 400, validationError)
    }
    
    const User = (await import('../models/User.js')).default
    const user = new User({ name, email, password, phone })
    await user.save()
    
    return successHandler(res, 201, 'User registered successfully', {
      token: 'test-token-123',
      user: { id: user._id, name: user.name, email: user.email }
    })
  } catch (error) {
    const { errorHandler } = await import('../Utils/responseHandler.js')
    return errorHandler(res, 500, 'Registration failed', error.message)
  }
}

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body
    
    const { validateLogin } = await import('../Utils/authValidation.js')
    const { successHandler, errorHandler } = await import('../Utils/responseHandler.js')
    
    const validationError = await validateLogin(email, password)
    
    if (validationError) {
      return errorHandler(res, 401, validationError)
    }
    
    const User = (await import('../models/User.js')).default
    const user = await User.findOne({ email })
    
    return successHandler(res, 200, 'Login successful', {
      token: 'test-token-123',
      user: { id: user._id, name: user.name, email: user.email }
    })
  } catch (error) {
    const { errorHandler } = await import('../Utils/responseHandler.js')
    return errorHandler(res, 500, 'Login failed', error.message)
  }
}


