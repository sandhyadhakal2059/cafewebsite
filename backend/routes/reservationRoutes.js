const express = require("express");
const router = express.Router();

const Table = require("../models/Table");
const Reservation = require("../models/Reservation");

/* =================================================
   INIT TABLES (AUTO CREATE TABLES 1–5)
================================================= */
router.get("/init", async (req, res) => {
  try {
    const count = await Table.countDocuments();

    if (count === 0) {
      const tables = [];
      for (let i = 1; i <= 5; i++) {
        tables.push({ number: i, status: "available" });
      }
      await Table.insertMany(tables);
      return res.json({ message: "Tables 1–5 created" });
    }

    res.json({ message: "Tables already exist" });
  } catch (err) {
    res.status(500).json({ message: "Init failed" });
  }
});

/* =================================================
   GET ALL TABLES (FOR CINEMA STYLE UI)
================================================= */
router.get("/tables", async (req, res) => {
  try {
    const tables = await Table.find().sort({ number: 1 });
    res.json(tables);
  } catch (err) {
    res.status(500).json({ message: "Failed to load tables" });
  }
});

/* =================================================
   RESERVE TABLE (NAME + DATE + TIME)
================================================= */
router.post("/reserve", async (req, res) => {
  try {
    const { name, tableNumber, date, time } = req.body;

    // validation
    if (!name || !tableNumber || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const table = await Table.findOne({ number: tableNumber });

    if (!table) {
      return res.status(404).json({ message: "Table not found" });
    }

    if (table.status === "reserved") {
      return res.status(400).json({ message: "Table already reserved" });
    }

    // create reservation WITH date & time
    await Reservation.create({
      name,
      tableNumber,
      date,
      time
    });

    // mark table as reserved
    table.status = "reserved";
    await table.save();

    res.json({ message: "Table reserved successfully" });
  } catch (err) {
    res.status(500).json({ message: "Reservation failed" });
  }
});

/* =================================================
   ADMIN – VIEW ALL RESERVATIONS (WITH DATE & TIME)
================================================= */
router.get("/admin", async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: "Failed to load reservations" });
  }
});

/* =================================================
   ADMIN – UNRESERVE TABLE
================================================= */
router.delete("/admin/:tableNumber", async (req, res) => {
  try {
    const { tableNumber } = req.params;

    await Reservation.deleteMany({ tableNumber });

    await Table.findOneAndUpdate(
      { number: tableNumber },
      { status: "available" }
    );

    res.json({ message: "Table unreserved" });
  } catch (err) {
    res.status(500).json({ message: "Unreserve failed" });
  }
});

module.exports = router;