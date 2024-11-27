const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Register a regular user
exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.create({ name, email, password, role: "user" });

        res.status(201).json({ success: true, data: { token: generateToken(user) } });
    } catch (err) {
        next(err);
    }
};

// Login a user
exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        res.status(200).json({ success: true, data: { token: generateToken(user) } });
    } catch (err) {
        next(err);
    }
};
