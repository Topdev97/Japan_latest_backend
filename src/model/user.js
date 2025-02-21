const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
    },
    companyName: {
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
        type: String,
        default: 'customer'
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
        default: 0
    },
    planId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plan",
    },
    updatedDate: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("User", userSchema);
