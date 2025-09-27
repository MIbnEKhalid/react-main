# Vercel Deployment Guide

## Project Structure
This project is set up to deploy both frontend (React + Vite) and backend (Express.js) to Vercel as a single application.

## How it works
- **Frontend**: Built as static files and served from `/`
- **Backend**: Runs as serverless functions under `/api/*` routes
- **Routing**: Vercel routes API calls to the backend and everything else to the frontend

## Deployment Steps

### 1. Install Vercel CLI (optional)
```bash
npm install -g vercel
```

### 2. Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically detect the configuration from `vercel.json`
4. Deploy!

### 3. Deploy via CLI
```bash
vercel --prod
```

## Configuration Files

### vercel.json
- Configures both frontend and backend builds
- Routes API calls to `/api/*` → backend serverless function
- Routes everything else to frontend static files

### Frontend Environment Variables
- **Development**: Uses `http://localhost:5000` for API calls
- **Production**: Uses relative URLs (same domain) for API calls

### Backend Configuration
- Exports Express app for Vercel serverless functions
- Still works locally with `npm run start` or `npm run dev`

## Local Development
```bash
# Install dependencies
npm run install:all

# Run both frontend and backend
npm run start
# or
npm run dev

# Build for production
npm run build
```

## Environment Variables on Vercel
If you need environment variables for production:
1. Go to your Vercel project dashboard
2. Go to Settings → Environment Variables
3. Add your variables (they will be available to your backend serverless functions)

## API Routes
- Your backend Express routes are available at `/api/*`
- Example: `https://your-app.vercel.app/api/hello`

## Troubleshooting
- Make sure your backend routes start with `/api/`
- Check that the frontend build succeeds locally before deploying
- Verify that your backend exports the Express app for Vercel