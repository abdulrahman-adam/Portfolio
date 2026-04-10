// // //Create Basic server
// // import express from "express";
// // import cors from "cors";
// // import 'dotenv/config';
// // import contactRouter from "./routes/contactRoute.js";
// // import connectDB from "./config/mongoDB.js";


// // // App config
// // const app = express();
// // const port = process.env.PORT || 5000

// // //Connection to database
// // connectDB();

// // // Configure CORS for frontend domain
// // // Middlewares
// // app.use(express.json()); // For JSON bodies
// // app.use(express.urlencoded({ extended: true })); // For form submissions
// // app.use(cors());


// // // API ENDPINTS

// // app.use('/api/contact', contactRouter)


// // app.get('/', (req, res) => {
// //     res.send('API WORKING');
// // })

// // // Start express server
// // app.listen(port, ()=> console.log('Server Started on PORT: '+ port))


// import express from "express";
// import cors from "cors";
// import 'dotenv/config';
// import contactRouter from "./routes/contactRoute.js";
// import connectDB from "./config/mongoDB.js";

// const app = express();
// const port = process.env.PORT || 5000;

// // Connect DB
// connectDB();

// // Allowed origins (add your frontend domain here)
// const allowedOrigins = [
//   "http://localhost:5173",   // for local dev
//   "http://abdulrahman-adam.com", // your deployed frontend
//   "https://abdulrahman-adam.com"
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     // allow requests with no origin (like Postman, curl)
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.indexOf(origin) === -1) {
//       return callback(new Error("CORS not allowed for this origin"), false);
//     }
//     return callback(null, true);
//   },
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use("/api/contact", contactRouter);

// app.get("/", (req, res) => {
//   res.send("API WORKING");
// });

// // Start server
// app.listen(port, () => console.log("Server running on PORT: " + port));


import express from "express";
import cors from "cors";
import 'dotenv/config';
import contactRouter from "./routes/contactRoute.js";
import connectDB, { sequelize } from "./config/mysqlDB.js";

const app = express();
const port = process.env.PORT || 5000;

// 1. DATABASE CONNECTION
const startDatabase = async () => {
    try {
        await connectDB();
        // Change to alter: false once your table is already created to stop loops
        await sequelize.sync({ alter: false }); 
        console.log("MySQL Tables Synchronized");
    } catch (error) {
        console.error("Database initialization failed:", error);
    }
};
startDatabase();

// 2. MIDDLEWARE (Must be BEFORE routes)
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [
  "http://localhost:5173",
  "http://abdulrahman-adam.com",
  "https://abdulrahman-adam.com"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      return callback(new Error("CORS not allowed"), false);
    }
  },
  credentials: true
}));

// 3. ROUTES
app.use("/api/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log("Server running on PORT: " + port));