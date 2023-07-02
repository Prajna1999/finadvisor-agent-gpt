import { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../src/supa.config';

export const fetchSubscriptions = async (req: NextApiRequest, res: NextApiResponse) => {

    const { id } = req.query;
    const { data, error } = await supabase.from('Users')
        .select('name, Subscriptions(name, description, value, subType, dateOfStart,dateOfEnd,dateOfNextPayment, reminder, active)')
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
        return fetchSubscriptions(req, res);
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
