// import mongoose from "mongoose";


// const contactSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     phone: {type: Number, required: true},
//     email: {type: String, required: true},
//     message: {type: String, required: true},
// })

// // Create the model
// const contactModel = mongoose.models.contact || mongoose.model("contact", contactSchema);
// export default contactModel;

import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysqlDB.js";
// import { sequelize } from "../config/mysqlDB.js";
// import { sequelize } from "../config/db.js"; // Adjust the path to your db file

const Contact = sequelize.define("Contact", {
    // MySQL needs an explicit ID or it will use a default one
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.BIGINT, // Using BIGINT to handle long phone numbers
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true, // Built-in validation for MySQL
        },
    },
    message: {
        type: DataTypes.TEXT, // TEXT is better for longer messages than STRING (VARCHAR)
        allowNull: false,
    },
}, {
    timestamps: true, // This adds createdAt and updatedAt automatically
    freezeTableName: true, // This keeps the name as 'Contact'
});

export default Contact;