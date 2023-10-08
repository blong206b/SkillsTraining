require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

const API_KEY = process.env.USAJOBS_API_KEY;

if (!API_KEY) {
    console.error("No API key found. Please check your .env file.");
    process.exit(1); // Exit the process with a "failure" code
}

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
                'User-Agent': 'YourAppName/1.0', // Replace with your app name and version
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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});