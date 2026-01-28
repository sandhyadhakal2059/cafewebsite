const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// DATABASE
mongoose
  .connect("mongodb://127.0.0.1:27017/sakhecafe")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// ROUTES (THIS IS THE KEY PART)
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api", require("./routes/reservationRoutes"));
app.use("/api/ratings", require("./routes/ratingRoutes"));
app.use("/api/subscribers", require("./routes/subscriberRoutes"));

// TEST ROOT
app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});