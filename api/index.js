const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
});

// For Vercel serverless deployment
module.exports = app;

// For local development
if (require.main === module) {
  const port = 3001;
  app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
  });
}