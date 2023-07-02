export const createExpense = async (amount,category, description, date) => {
    try {
        const response = await fetch('/api/expense', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: description,amount: amount, date: date,category:category
            }),
        });

        // If the response status isn't in the 200-299 range, it's an error
        if (!response.ok) {
            const message = await response.json();
            throw new Error(`HTTP error! status: ${response.status}, message: ${message.error}`);
        }

        const data = await response.json();

        console.log(data)
        return data;

    } catch (error) {
        console.error(error);
        // Handle errors as you see fit. For example, you might re-throw the error,
        // or return a specific error object.
        throw error;
    }
}

// You can then use the function to create an expense like this:
// createExpense(100, "Groceries", new Date())
//     .then(data => console.log("Expense created:", data))
//     .catch(error => console.error("Error creating expense:", error.message));
