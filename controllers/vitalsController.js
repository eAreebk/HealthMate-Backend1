export const addVitalsController = async (req, res) => {
  try {
    const { bloodPressure, heartRate, temperature, weight, date, time } = req.body
    
    const { successHandler, errorHandler } = await import('../Utils/responseHandler.js')
    
    if (!bloodPressure || !heartRate || !date || !time) {
      return errorHandler(res, 400, 'Blood pressure, heart rate, date and time are required')
    }
    
    const Vitals = (await import('../models/Vitals.js')).default
    
    const vitals = new Vitals({
      userId: '507f1f77bcf86cd799439011',
      bloodPressure,
      heartRate,
      temperature: temperature || null,
      weight: weight || null,
      date,
      time
    })
    
    await vitals.save()
    
    return successHandler(res, 201, 'Vitals added successfully', vitals)
  } catch (error) {
    const { errorHandler } = await import('../Utils/responseHandler.js')
    return errorHandler(res, 500, 'Failed to add vitals', error.message)
  }
}

export const getVitalsController = async (req, res) => {
  try {
    const { successHandler, errorHandler } = await import('../Utils/responseHandler.js')
    const Vitals = (await import('../models/Vitals.js')).default
    
    const vitals = await Vitals.find({ userId: '507f1f77bcf86cd799439011' }).sort({ date: -1, time: -1 })
    
    return successHandler(res, 200, 'Vitals retrieved successfully', vitals, vitals.length)
  } catch (error) {
    const { errorHandler } = await import('../Utils/responseHandler.js')
    return errorHandler(res, 500, 'Failed to retrieve vitals', error.message)
  }
}