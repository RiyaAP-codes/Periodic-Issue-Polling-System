const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        default: "general"
    },

    status: {
        type: String,
        enum: ["pending", "in progress", "resolved"],
        default: "pending"
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Issue", issueSchema);