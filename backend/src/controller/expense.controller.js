const supabase=require('../utils/db');

const createExpense = async (req, res) => {
    try {
        // assuming the request body contains the necessary expense data
        const { amount,category, description, date } = req.body;  

        if (!amount || !category) {
            return res.status(400).json({ error: "Incomplete expense data provided." });
        }

        const { data, error } = await supabase
            .from('expenses')  // replace 'expenses' with the correct table name
            .insert([
                {  description: description,amount: amount, date: date,category:category }
            ]);

        if (error) throw error;

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating the expense" });
    }
}

module.exports = createExpense;
