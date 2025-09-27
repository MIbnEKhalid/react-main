const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Handle requests by serving index.html for all non-API routes
app.use((req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// API endpoint

app.use('/api/hello', async (req, res) => {
    res.send({ message: 'Hello from the API!' });
});

// Start the server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});