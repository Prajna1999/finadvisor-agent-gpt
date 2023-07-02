const axios = require('axios');

const processPrompt = async (req, res) => {
    try {
        const prompt = req.body.text;
        
        if (!prompt) {
            return res.status(400).json({ error: "No prompt provided in request body" });
        }

        const fastApiRes = await axios.post('https://acorn-py.onrender.com', {
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
}

module.exports = processPrompt;
