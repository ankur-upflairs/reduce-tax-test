const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Register an admin
exports.registerAdmin = async (req, res, next) => {
    try {
        const { name, email, password, accessLevel } = req.body;

        const admin = await Admin.create({
            name,
            email,
            password,
            role: "admin",
            accessLevel,
        });

        res.status(201).json({ success: true, data: { token: generateToken(admin) } });
    } catch (err) {
        next(err);
    }
};

// Get admin dashboard (protected route)
exports.getAdminDashboard = async (req, res, next) => {
    try {
        const admin = await Admin.findById(req.user.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "Admin not found" });
        }
        res.status(200).json({ success: true, message: "Welcome to the admin dashboard", data: admin });
    } catch (err) {
        next(err);
    }
};
