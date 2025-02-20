const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    accessToken: {
        type: String,
    },
    role: {
        type: String
    },
    phone: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
    },
    recoveryPasscode: {
        type: String
    },
    storeCount: {
        type: Number,
    },
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plan",
    },
    updatedDate: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("User", userSchema);
