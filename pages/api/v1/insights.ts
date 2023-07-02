import { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../src/supa.config';

export const insertInsights = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const { question, response } = req.body;
    const { data, error } = await supabase
        .from('Insights')
        .insert([
            {
                userid: id,
                question,
                response
            },
        ])
        .select()


    if (error) {
        console.error('Error fetching users:', error);
        return;
    }

    console.log('Users:', data);


    res.status(200).json(data);
};


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Map the API routes to the corresponding controller functions
    if (req.method === 'POST') {
        return insertInsights(req, res);
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
