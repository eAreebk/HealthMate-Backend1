export const uploadReportController = async (req, res) => {
  try {
    const { name, type, date, notes } = req.body
    
    const { successHandler, errorHandler } = await import('../Utils/responseHandler.js')
    
    if (!name || !type || !date) {
      return errorHandler(res, 400, 'Name, type and date are required')
    }
    
    const Report = (await import('../models/Report.js')).default
    
    const report = new Report({
      userId: '507f1f77bcf86cd799439011',
      name,
      type,
      date,
      notes: notes || '',
      status: 'uploaded'
    })
    
    await report.save()
    
    return successHandler(res, 201, 'Report uploaded successfully', report)
  } catch (error) {
    const { errorHandler } = await import('../Utils/responseHandler.js')
    return errorHandler(res, 500, 'Failed to upload report', error.message)
  }
}

export const getReportsController = async (req, res) => {
  try {
    const { successHandler, errorHandler } = await import('../Utils/responseHandler.js')
    const Report = (await import('../models/Report.js')).default
    
    const reports = await Report.find({ userId: '507f1f77bcf86cd799439011' }).sort({ createdAt: -1 })
    
    return successHandler(res, 200, 'Reports retrieved successfully', reports, reports.length)
  } catch (error) {
    const { errorHandler } = await import('../Utils/responseHandler.js')
    return errorHandler(res, 500, 'Failed to retrieve reports', error.message)
  }
}