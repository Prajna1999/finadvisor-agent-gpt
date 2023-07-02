import { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../src/supa.config';

export const fetchSubscriptions = async (req: NextApiRequest, res: NextApiResponse) => {

    const { id } = req.query;
    const { data, error } = await supabase.from('Users')
        .select('name, Subscriptions(name, description, value, subtype, dateofstart,dateofend,dateofnextpayment, reminder, active)')
        .eq('id', id);

    if (error) {
        console.error('Error fetching users:', error);
        return;
    }

    res.status(200).json(data);
};

export const insertSubscriptions = async (req:NextApiRequest, res:NextApiResponse) => {
    const { name, description, value, reminder, active, userid, subtype, dateofstart,dateofend, dateofnextpayment } = req.body;
   
    const { data, error } = await supabase
    .from('Subscriptions')
    .insert([
    {  name, description, value, reminder, active, userid, subtype, dateofstart,dateofend, dateofnextpayment },
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
        return fetchSubscriptions(req, res);
    } else if(req.method === 'POST') {
        return insertSubscriptions(req, res);
    }else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
