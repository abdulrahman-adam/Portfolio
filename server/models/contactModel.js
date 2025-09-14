import mongoose from "mongoose";


const contactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
})

// Create the model
const contactModel = mongoose.models.contact || mongoose.model("contact", contactSchema);
export default contactModel;