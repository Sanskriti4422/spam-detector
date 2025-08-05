const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Import spam detection logic
const isSpam = require('./spamChecker');

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.static(__dirname));

// Route to serve the main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'spam.html'));
});

// API route to handle spam detection
app.post('/detect-spam', (req, res) => {
  const { text } = req.body;
  const spam = isSpam(text);
  res.json({ spam });
});

// Start server
app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}`);
});
