const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// TEST ROUTE (VERY IMPORTANT)
router.get("/test", (req, res) => {
  res.send("CONTACT ROUTE OK");
});

// SAVE CONTACT
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  await Contact.create({ name, email, message });
  res.json({ message: "Saved" });
});

// ADMIN – GET ALL CONTACTS
router.get("/admin", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// ADMIN – DELETE CONTACT
router.delete("/admin/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;