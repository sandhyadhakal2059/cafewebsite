const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

/* =========================
   TEST ROUTE (OPTIONAL)
========================= */
router.get("/test", (req, res) => {
  res.send("SUBSCRIBER ROUTE WORKING");
});

/* =========================
   SUBSCRIBE EMAIL
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

    await Subscriber.create({ email });
    res.json({ message: "Subscribed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Subscription failed" });
  }
});

/* =========================
   ADMIN – GET ALL SUBSCRIBERS (LIST)
========================= */
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subscribers); // ✅ ARRAY
  } catch (err) {
    res.status(500).json({ message: "Failed to load subscribers" });
  }
});

/* =========================
   ADMIN – GET SUBSCRIBER COUNT
========================= */
router.get("/count", async (req, res) => {
  try {
    const total = await Subscriber.countDocuments();
    res.json({ total });
  } catch (err) {
    res.status(500).json({ message: "Failed to load count" });
  }
});

module.exports = router;