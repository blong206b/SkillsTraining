require('dotenv').config();
const API_KEY = process.env.USAJOBS_API_KEY;
if (!API_KEY) {
    console.error("No API key found. Please check your .env file.");
    process.exit(1); // Exit the process with a "failure" code
}