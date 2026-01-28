const express = require("express");
const router = express.Router();
const Rating = require("../models/Rating");

/* =========================
   SUBMIT RATING
========================= */
router.post("/", async (req, res) => {
  try {
    const { name, stars, comment } = req.body;

    if (!name || !stars || !comment) {
      return res.status(400).json({ message: "All fields required" });
    }

    await Rating.create({ name, stars, comment });
    res.json({ message: "Rating submitted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to submit rating" });
  }
});

/* =========================
   GET ALL RATINGS (TOP FIRST)
========================= */
router.get("/", async (req, res) => {
  const ratings = await Rating.find().sort({
    stars: -1,
    createdAt: -1
  });
  res.json(ratings);
});

/* =========================
   GET STATS (AVG + COUNT)
========================= */
router.get("/stats", async (req, res) => {
  const stats = await Rating.aggregate([
    {
      $group: {
        _id: null,
        averageRating: { $avg: "$stars" },
        totalReviews: { $sum: 1 }
      }
    }
  ]);

  res.json(
    stats[0] || { averageRating: 0, totalReviews: 0 }
  );
});

module.exports = router;