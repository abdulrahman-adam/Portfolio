// import mongoose from "mongoose";


// const connectDB = async () => {
    
//     mongoose.connection.on('connected', () => {
//         console.log('Connected to DB')
//     })
//     await mongoose.connect(`${process.env.MONGODB_URL}`)
// }

// export default connectDB;

import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Create a Sequelize instance
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false, // Set to true if you want to see SQL queries in the console
    }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to MySQL DB via Sequelize');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export { sequelize }; // Export the instance to define models later
export default connectDB;