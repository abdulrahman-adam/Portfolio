import express from "express";
import { addContact, listContacts, removeContact } from "../controllers/contactController.js";



// Create the router
const contactRouter = express.Router();

contactRouter.post("/add", addContact);
contactRouter.post("/remove",removeContact);
contactRouter.get("/list", listContacts);


export default contactRouter;