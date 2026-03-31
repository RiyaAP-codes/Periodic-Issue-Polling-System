const express = require("express");
const router = express.Router();

const { createIssue, getUserIssues, updateIssueStatus, getAllIssues } = require("../controllers/issueController");

const { verifyToken, checkRole } = require("../middleware/authMiddleware");

// create issue
router.post("/create", verifyToken, createIssue);

// get user issues
router.get("/my", verifyToken, getUserIssues);


// update issue (admin only)
router.put("/update/:id", verifyToken, checkRole(["admin"]), updateIssueStatus);

//admin sees all users issues 
router.get("/all", verifyToken, checkRole(["admin"]), getAllIssues);

module.exports = router;