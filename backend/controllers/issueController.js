const Issue = require("../models/Issue");

// create issue
exports.createIssue = async (req, res) => {
    try {
        const { title, description, category } = req.body;

        const newIssue = new Issue({
            title,
            description,
            category,
            user: req.user.id
        });

        await newIssue.save();

        res.status(201).json({
            message: "Issue submitted successfully",
            issue: newIssue
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};
// fetching issues of users 
// get user issues
exports.getUserIssues = async (req, res) => {
    try {
        const issues = await Issue.find({ user: req.user.id });

        res.json({
            message: "Issues fetched successfully",
            issues: issues
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

// update issue status (admin)
exports.updateIssueStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const { id } = req.params;

        const issue = await Issue.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        res.json({
            message: "Issue status updated",
            issue: issue
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

// get all issues (admin)
exports.getAllIssues = async (req, res) => {
    try {
        const issues = await Issue.find().populate("user", "name email");

        res.json({
            message: "All issues fetched",
            issues: issues
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};