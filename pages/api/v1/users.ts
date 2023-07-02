import { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../src/supa.config';

export const fetchUsers = async (req: NextApiRequest, res: NextApiResponse) => {

    const { id } = req.query;

    const { data, error } = await supabase.from('Users')
        .select('name, expenses(name, description, value, dateofexpense, modeofexpense, category), Incomes(name, value, dateofincome, incometype, modeofincome), Subscriptions(name, description, value, subtype, dateofstart,dateofend,dateofnextpayment, reminder, active)')
        .eq('id', id);

    if (error) {
        console.error('Error fetching users:', error);
        return;
    }

    res.status(200).json(data);
};


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Map the API routes to the corresponding controller functions
    if (req.method === 'GET') {
        return fetchUsers(req, res);
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
