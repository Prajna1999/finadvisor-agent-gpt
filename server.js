const express = require('express');
const axios = require('axios');

const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.set('trust proxy', true);

app.use(helmet())
app.use(cors(
    {
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true, // allow session cookie from browser to pass through
    }
))


app.use(express.json()); // Middleware for parsing JSON bodies from incoming requests

app.post('/api/v1/chat', async (req, res) => {
    try {
        const prompt = req.body.text;
        
        if (!prompt) {
            return res.status(400).json({ error: "No prompt provided in request body" });
        }

        const fastApiRes = await axios.post('http://127.0.0.1:5000/process-prompt', {
            text: prompt,
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        res.json(fastApiRes.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while processing the prompt" });
    }
});



//errrohandling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'An unexpected error occurred' });
});

const port = 5001;

app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});
