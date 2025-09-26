## React Full-Stack Application

A complete full-stack application with React frontend and Express backend.

### Project Structure
```
react-main/
├── frontend/          # React + Vite frontend
├── backend/           # Express.js backend
├── package.json       # Root workspace configuration
└── README.md
```

### Quick Start

#### Install All Dependencies (Recommended)
```bash
npm install
```

#### Run Both Frontend and Backend
```bash
npm run dev
```

### Individual Commands

#### Backend Only
```bash
cd backend
npm install
npm run dev      # Development with nodemon
npm start        # Production
```

#### Frontend Only
```bash
cd frontend
npm install
npm run dev      # Development server
npm run build    # Production build
```

### Environment Variables
- Backend: Copy `.env.example` to `.env` and configure
- Frontend: Copy `.env.example` to `.env` and configure API URL

### Available Scripts
- `npm run dev` - Run both frontend and backend in development
- `npm run dev:frontend` - Run only frontend
- `npm run dev:backend` - Run only backend  
- `npm run build:frontend` - Build frontend for production
- `npm install` - Install all dependencies for both projects

### API Endpoints
- `GET /api/hello` - Test endpoint

### Tech Stack
- **Frontend**: React 19, Vite, ESLint
- **Backend**: Express.js, CORS, dotenv
- **Development**: Nodemon, Concurrently 