import express from 'express'
import auth from '../middleware/auth.js'
import { uploadReportController, getReportsController } from '../controllers/reportsController.js'
import { successHandler, errorHandler } from '../Utils/responseHandler.js'
import Report from '../models/Report.js'

const router = express.Router()

router.post('/upload', uploadReportController)
router.get('/', getReportsController)

router.get('/:id', async (req, res) => {
  try {
    const report = await Report.findOne({ _id: req.params.id, userId: req.user._id })
    if (!report) {
      return errorHandler(res, 404, 'Report not found')
    }
    return successHandler(res, 200, 'Report retrieved successfully', report)
  } catch (error) {
    return errorHandler(res, 500, 'Failed to retrieve report', error.message)
  }
})

export default router