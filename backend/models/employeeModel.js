const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["employee"], default: "employee" },
    department: { type: String, required: true },
    salary: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Employee", EmployeeSchema);
