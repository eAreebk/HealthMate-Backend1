const validateRegister = (req, res, next) => {
  const { name, email, password, phone } = req.body;
  const errors = [];

  if (!name || name.trim().length < 2) errors.push('Name must be at least 2 characters');
  if (!email || !/\S+@\S+\.\S+/.test(email)) errors.push('Valid email is required');
  if (!password || password.length < 6) errors.push('Password must be at least 6 characters');
  if (!phone || !/^\+?[\d\s-()]{10,}$/.test(phone)) errors.push('Valid phone number is required');

  if (errors.length > 0) {
    return res.status(400).json({ message: 'Validation failed', errors });
  }
  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  if (!email) errors.push('Email is required');
  if (!password) errors.push('Password is required');

  if (errors.length > 0) {
    return res.status(400).json({ message: 'Validation failed', errors });
  }
  next();
};

const validateReport = (req, res, next) => {
  const { name, type, date } = req.body;
  const errors = [];
  const validTypes = ['Blood Test', 'X-Ray', 'MRI Scan', 'CT Scan', 'Ultrasound', 'ECG', 'Prescription', 'Other'];

  if (!name || name.trim().length < 2) errors.push('Report name is required');
  if (!type || !validTypes.includes(type)) errors.push('Valid report type is required');
  if (!date || isNaN(Date.parse(date))) errors.push('Valid date is required');
  if (!req.file) errors.push('File is required');

  if (errors.length > 0) {
    return res.status(400).json({ message: 'Validation failed', errors });
  }
  next();
};

const validateVitals = (req, res, next) => {
  const { date, time } = req.body;
  const errors = [];

  if (!date || isNaN(Date.parse(date))) errors.push('Valid date is required');
  if (!time || !/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)) errors.push('Valid time is required');

  if (errors.length > 0) {
    return res.status(400).json({ message: 'Validation failed', errors });
  }
  next();
};

export { validateRegister, validateLogin, validateReport, validateVitals };