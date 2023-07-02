import { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../src/supa.config';

export const fetchExpenses = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const { data, error } = await supabase.from('Users')
        .select('name, expenses(name, description, value, dateofexpense, modeofexpense, category)')
        .eq('id', id);

    if (error) {
        console.error('Error fetching users:', error);
        return;
    }

    console.log('Users:', data);


    res.status(200).json(data);
};


export const insertExpenses = async (req:NextApiRequest, res:NextApiResponse) => {
    const { name, description, value, category, userid, dateofexpense, modeofexpense } = req.body;
   
    const { data, error } = await supabase
    .from('expenses')
    .insert([
    {  name, description, value, category, userid, dateofexpense, modeofexpense },
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
        return fetchExpenses(req, res);
    } else if(req.method === 'POST') {
        return insertExpenses(req, res);
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
