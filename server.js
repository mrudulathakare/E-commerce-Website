import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';

// configure env
dotenv.config();

// database config
connectDB();

// rest object
const app = express()

// middleware
app.use(express.json())
app.use(morgan('dev'))

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
