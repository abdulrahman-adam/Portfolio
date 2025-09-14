//Create Basic server
import express from "express";
import cors from "cors";
import 'dotenv/config';
import contactRouter from "./routes/contactRoute.js";
import connectDB from "./config/mongoDB.js";


// App config
const app = express();
const port = process.env.PORT || 5000

//Connection to database
connectDB();

// Configure CORS for frontend domain
// Middlewares
app.use(express.json()); // For JSON bodies
app.use(express.urlencoded({ extended: true })); // For form submissions
app.use(cors());


// API ENDPINTS

app.use('/api/contact', contactRouter)


app.get('/', (req, res) => {
    res.send('API WORKING');
})

// Start express server
app.listen(port, ()=> console.log('Server Started on PORT: '+ port))