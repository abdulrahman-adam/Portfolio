
import contactModel from "../models/contactModel.js";
// fuction for add product
// Example: Contact model (MongoDB/Mongoose)
const addContact = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    // 1. Validation
    if (!name || !phone || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // 2. Create new contact
    const newContact = new contactModel({
      name,
      phone,
      email,
      message
    });

    await newContact.save();

    // 3. Success response
    res.json({
      success: true,
      message: "have received your message and will contact you shortly.",
      contact: newContact
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// fuction for list product
const listContacts = async(req, res) => {
    try {
        // Store the product data
        const contacts  = await contactModel.find({});
        res.json({success: true, contacts})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const removeContact = async (req, res) => {
  try {
    const { id } = req.body; // Get ID from request body
    if (!id) {
      return res.status(400).json({ success: false, message: "ID manquant" });
    }

    await contactModel.findByIdAndDelete(id);

    res.json({ success: true, message: "Le contact a été supprimé" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};





export {addContact, listContacts, removeContact}