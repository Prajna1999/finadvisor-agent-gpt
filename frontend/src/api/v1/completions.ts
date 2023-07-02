import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv';

import { NextApiRequest, NextApiResponse } from 'next';

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const fetchCompletions = async (req: NextApiRequest, res: NextApiResponse) => {

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${req.body.data} \n ${req.body.userPrompt} ${!req.body.data ? 'from given json data' : ''} in a descriptive and understandable way`,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    res.status(200).send(response.data);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Map the API routes to the corresponding controller functions
    if (req.method === 'POST') {
        return fetchCompletions(req, res);
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}

