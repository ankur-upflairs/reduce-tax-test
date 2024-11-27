const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin"], default: "admin" },
    accessLevel: { type: Number, required: true }, // Admin-specific field
}, { timestamps: true });

module.exports = mongoose.model("Admin", AdminSchema);
