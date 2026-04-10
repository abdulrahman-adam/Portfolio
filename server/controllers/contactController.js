
// import contactModel from "../models/contactModel.js";
// // fuction for add product
// // Example: Contact model (MongoDB/Mongoose)
// const addContact = async (req, res) => {
//   try {
//     const { name, phone, email, message } = req.body;


//     // 1. Validation
//     if (!name || !phone || !email || !message) {
//       return res.status(400).json({ success: false, message: "All fields are required" });
//     }

//     // 2. Create new contact
//     const newContact = new contactModel({
//       name,
//       phone,
//       email,
//       message
//     });

//     await newContact.save();

//     // 3. Success response
//     res.json({
//       success: true,
//       message: "have received your message and will contact you shortly.",
//       contact: newContact
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };


// // fuction for list product
// const listContacts = async(req, res) => {
//     try {
//         // Store the product data
//         const contacts  = await contactModel.find({});
//         res.json({success: true, contacts})
//     } catch (error) {
//         console.log(error)
//         res.json({success: false, message: error.message})
//     }
// }

// const removeContact = async (req, res) => {
//   try {
//     const { id } = req.body; // Get ID from request body
//     if (!id) {
//       return res.status(400).json({ success: false, message: "ID manquant" });
//     }

//     await contactModel.findByIdAndDelete(id);

//     res.json({ success: true, message: "Le contact a été supprimé" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };





// export {addContact, listContacts, removeContact}


// import Contact from "../models/contactModel.js"; // This should be your Sequelize model
import { sequelize } from "../config/mysqlDB.js";
import Contact from "../models/contactModel.js";
import contactRouter from "../routes/contactRoute.js";

// function for add contact
const addContact = async (req, res) => {
  try {
    // Log the incoming data to see if it even arrives!
    console.log("Data received from React:", req.body);
    const { name, phone, email, message } = req.body;

    // 1. Validation
    if (!name || !phone || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // 2. Create new contact (Sequelize uses .create)
    const newContact = await Contact.create({
      name,
      phone,
      email,
      message
    });

    // 3. Success response
    res.json({
      success: true,
      message: "Have received your message and will contact you shortly.",
      contact: newContact
    });
  } catch (error) {
    console.error("MySQL Save Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// function for list contacts
const listContacts = async (req, res) => {
  try {
    // In Sequelize, find({}) becomes .findAll()
    console.log("Database Name:", sequelize.config.database);
        console.log("Database Host:", sequelize.config.host);
    const contacts = await Contact.findAll();
    res.json({ success: true, contacts });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for remove contact
const removeContact = async (req, res) => {
  try {
    const { id } = req.body; 
    if (!id) {
      return res.status(400).json({ success: false, message: "ID missing" });
    }

    // In Sequelize, findByIdAndDelete becomes .destroy()
    const deletedCount = await Contact.destroy({
      where: { id: id }
    });

    if (deletedCount === 0) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }

    res.json({ success: true, message: "The contact has been deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addContact, listContacts, removeContact };