const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
console.log(process.env.MONGO_URI);
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const issueRoutes = require("./routes/issueRoutes");

const app = express();


// connect database

connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/issues", issueRoutes);

// test route
app.get("/", (req, res) => {
    res.send("Periodic Issue Polling & Feedback System API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});