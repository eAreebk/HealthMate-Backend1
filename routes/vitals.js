import express from 'express'
import auth from '../middleware/auth.js'
import { addVitalsController, getVitalsController } from '../controllers/vitalsController.js'
import { successHandler, errorHandler } from '../Utils/responseHandler.js'
import Vitals from '../models/Vitals.js'

const router = express.Router()

router.post('/', addVitalsController)
router.get('/', getVitalsController)

router.get('/stats', async (req, res) => {
  try {
    const totalVitals = await Vitals.countDocuments({ userId: req.user._id })
    const latestVitals = await Vitals.findOne({ userId: req.user._id }).sort({ date: -1, time: -1 })
    
    return successHandler(res, 200, 'Vitals stats retrieved successfully', {
      totalVitals,
      latestVitals
    })
  } catch (error) {
    return errorHandler(res, 500, 'Failed to retrieve vitals stats', error.message)
  }
})

export default router