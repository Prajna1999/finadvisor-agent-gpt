require("dotenv").config();

// Initialize Supabase client
const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_KEY;

let supabase = "";
try {
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  if (!supabase) {
    return;
  }

  console.log("db connect successful");
} catch (error) {
  console.error(error);
  // res.status(500).json({error:"Internal server error"})
  throw new Error(error.message);
}

module.exports = supabase;
