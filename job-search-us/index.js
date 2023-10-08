require('dotenv').config();

let fetch;
import ('node-fetch').then(module => {
    fetch = module.default;
});

const API_KEY = process.env.USAJOBS_API_KEY;
if (!API_KEY) {
    console.error("No API key found. Please check your .env file.");
    process.exit(1);
}

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Endpoint to fetch jobs
app.get('/getJobs', async(req, res) => {
    const BASE_URL = 'https://data.usajobs.gov/api/Search';
    const params = new URLSearchParams({
        'Keyword': 'web developer',
        // Add other parameters based on the API docs
    });

    const url = `${BASE_URL}?${params}`;

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization-Key': API_KEY,
                'User-Agent': 'YourAppName/1.0',
                'Host': 'data.usajobs.gov'
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Simple "Hello, World!" endpoint
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}/`);
});