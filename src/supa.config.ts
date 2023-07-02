import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from './config';

// Initialize Supabase client
const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: false
    }
});

export default supabase;