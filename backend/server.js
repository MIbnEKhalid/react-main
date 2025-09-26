// backend/server.js
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // allow frontend requests
app.use(express.json()); // parse JSON bodies

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
