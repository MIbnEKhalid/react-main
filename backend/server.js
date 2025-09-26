// backend/server.js
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
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
