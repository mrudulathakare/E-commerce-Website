import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

// configure env
dotenv.config();
// rest object
const app = express()

// rest api
app.get('/',(req,res) => {
    res.send("<h1>Welcome to e-commerce app</h1>")
})

// port
const PORT = process.env.PORT || 8080;

// listen()
app.listen(PORT,() => {
    console.log(`Server running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white);
}
)
