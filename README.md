# HealthMate - Full Stack Application

A complete health management application with React frontend and Node.js backend.

## 📁 Project Structure

```
healthmate/
├── frontend/          # React frontend application
│   ├── src/          # React source code
│   ├── package.json  # Frontend dependencies
│   └── ...
├── backend/          # Node.js backend API
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── middleware/   # Custom middleware
│   ├── package.json  # Backend dependencies
│   └── server.js     # Main server file
├── package.json      # Root package.json for scripts
└── README.md
```

## 🚀 Quick Start

### Install All Dependencies
```bash
npm run install:all
```

### Development Mode (Both Frontend & Backend)
```bash
npm run dev
```

### Individual Development
```bash
# Frontend only
npm run dev:frontend

# Backend only  
npm run dev:backend
```

### Production Build
```bash
npm run build
```

## 🔧 Manual Setup

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

## 📝 Environment Variables

Create `.env` file in the `backend` folder:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5001
NODE_ENV=development
```

## 🌐 URLs

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5001

## 📦 Technologies

### Frontend
- React 18 + Vite
- Tailwind CSS
- React Router Dom
- Framer Motion

### Backend  
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- ES6 Modules