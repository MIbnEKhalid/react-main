# Full-Stack React + Node.js Project for Vercel

This project contains a React frontend and a Node.js backend, set up to run as a single Vercel project.

## Project Structure

- `src/` - React frontend source code
- `api/` - Node.js backend API routes (for Vercel serverless functions)
- `api/index.js` - Local development server
- `public/` - Static assets
- `package.json` - Dependencies and scripts
- `vercel.json` - Vercel configuration

## Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Start the backend server:
   ```
   npm start
   ```

3. In another terminal, start the frontend:
   ```
   npm run dev
   ```

The frontend will proxy API requests to the backend running on port 3001.

## Deployment to Vercel

1. Push this code to a Git repository.
2. Connect the repository to Vercel.
3. Vercel will use the `vercel.json` configuration to build the frontend and deploy API routes as serverless functions.

## API Endpoints

- `GET /api/hello` - Returns a hello message from the backend