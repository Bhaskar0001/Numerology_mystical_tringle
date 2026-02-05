const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const triangleController = require('./controllers/triangleController');

// dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow all origins for simplicity in this demo, or configure specific origins
app.use(bodyParser.json());

// Routes
app.post('/api/triangle', triangleController.generateTriangle);

// Serve static files from React frontend
const path = require('path');
// Serve static files (ensure index.html is served for root)
const buildPath = path.resolve(__dirname, 'public');
app.use(express.static(buildPath));

console.log("Serving frontend from:", buildPath);

// Specific handler for root to ensure index.html is served
// app.get('/', (req, res) => {
//     res.sendFile(path.join(buildPath, 'index.html'));
// });

// Fallback for SPA routing - Middleware style
app.use((req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
