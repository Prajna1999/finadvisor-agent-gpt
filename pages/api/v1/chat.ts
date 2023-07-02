import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const filterAIResponse = (responseData:any) => {
    if((responseData?.aiResponse.match(/\n/g) || [])?.length > 1) {
       return responseData?.aiResponse.split("\n").filter((x: string | any[]) => x.length !== 0)
    } 
    return responseData;
}

export const fetchAIResponse = async (req: NextApiRequest, res: NextApiResponse) => {
     const prompt = req.body.prompt;

     if(!prompt) {
        console.error("No prompt provided in request body")
     }

     const response = await axios.post('http://127.0.0.1:8000/process-prompt', {
            text: prompt,
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

    if(response.statusText === 'OK' && response.status === 200) {
        res.status(200).json({ data: filterAIResponse(response.data)});

    } else {
        res.status(204).json({})
    }

};


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Map the API routes to the corresponding controller functions
    if (req.method === 'POST') {
        return fetchAIResponse(req, res);
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
