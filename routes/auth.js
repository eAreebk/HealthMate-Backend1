import express from 'express'
import { registerController, loginController } from '../controllers/authController.js'
import { successHandler } from '../Utils/responseHandler.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.post('/register', registerController)
router.post('/login', loginController)

router.get('/me', auth, async (req, res) => {
  return successHandler(res, 200, 'User data retrieved successfully', {
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email
    }
  })
})

export default router