const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

/* =========================
   SUBSCRIBE EMAIL (USER)
========================= */
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email required" });
    }

    const exists = await Subscriber.findOne({ email });
    if (exists) {
      return res.status(409).json({ message: "Already subscribed" });
    }

    const subscriber = await Subscriber.create({ email });
    res.json(subscriber);
  } catch (err) {
    res.status(500).json({ message: "Subscription failed" });
  }
});

/* =========================
   ADMIN – GET SUBSCRIBER LIST
========================= */
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subscribers); // ✅ MUST BE ARRAY
  } catch (err) {
    res.status(500).json({ message: "Failed to load subscribers" });
  }
});

module.exports = router;