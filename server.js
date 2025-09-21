const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // load .env

const userRoutes = require("./src/routes/userRoutes");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URLß)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// Routes
app.use("/api/users", userRoutes);
   
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
