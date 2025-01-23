const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

// Controllers
const sendEmail = require('./controllers/sendEmail');

// Middleware to handle CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        // Respond to preflight request
        return res.sendStatus(204); // No Content
    }
    next();
});

// Middleware to parse JSON
app.use(express.json());

// Routes
app.post('/send-email', sendEmail);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
