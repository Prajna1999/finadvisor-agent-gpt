import { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../src/supa.config';

export const fetchIncomes = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const { data, error } = await supabase.from('Users')
        .select('name, Incomes(name, description, value, dateofincome, incometype, modeofincome)')
        .eq('id', id);

    if (error) {
        console.error('Error fetching users:', error);
        return;
    }


    res.status(200).json(data);
};

export const insertIncomes = async (req:NextApiRequest, res:NextApiResponse) => {
    const { name, description, value, userid, dateofincome, incometype, modeofincome } = req.body;
   
    const { data, error } = await supabase
    .from('Incomes')
    .insert([
    {  name, description, value, userid, dateofincome, incometype, modeofincome },
    ])
    .select()


    if (error) {
        console.error('Error fetching users:', error);
        res.status(500).json(data);
        return;
    }

    
    res.status(200).json(data);

}


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Map the API routes to the corresponding controller functions
    if (req.method === 'GET') {
        return fetchIncomes(req, res);
    } else if (req.method === 'POST') {
        return insertIncomes(req, res);
    } 
    else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
