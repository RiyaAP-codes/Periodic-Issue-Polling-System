const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/authController");
const { verifyToken, checkRole } = require("../middleware/authMiddleware");
// test route
router.get("/test", (req, res) => {
    res.json({
        message: "Auth route working",
        status: "success"
    });
});

// register
router.post("/register", registerUser);

// login
router.post("/login", loginUser);

// protected route
router.get("/profile", verifyToken, (req, res) => {
    res.json({
        message: "User profile accessed",
        user: req.user
    });
});

//admin route
router.get("/admin", verifyToken, checkRole(["admin"]), (req, res) => {
    res.json({
        message: "Admin access granted"
    });
});

module.exports = router;