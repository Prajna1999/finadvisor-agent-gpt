const express = require('express');


const helmet = require("helmet");
const cors = require("cors");


const processPrompt=require('./src/controller/langchain.controllers');
const createExpense=require('./src/controller/expense.controller')
const app = express();

app.set('trust proxy', true);

app.use(helmet())
app.use(cors(
    {
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true, // allow session cookie from browser to pass through
    }
))


app.use(express.json()); // Middleware for parsing JSON bodies from incoming requests
app.get('/', (req,res)=>{
    res.send('Hello from server')
})
app.post('/api/prompt',processPrompt);

app.post('/api/expense', createExpense);


//errrohandling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'An unexpected error occurred' });
});

const port = 5001||process.env.PORT;

app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});
