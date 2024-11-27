const Employee = require("../models/employeeModel");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Register an employee
exports.registerEmployee = async (req, res, next) => {
    try {
        const { name, email, password, department, salary } = req.body;

        const employee = await Employee.create({
            name,
            email,
            password,
            role: "employee",
            department,
            salary,
        });

        res.status(201).json({ success: true, data: { token: generateToken(employee) } });
    } catch (err) {
        next(err);
    }
};

// Get employee details (protected route)
exports.getEmployeeDetails = async (req, res, next) => {
    try {
        const employee = await Employee.findById(req.user.id);
        if (!employee) {
            return res.status(404).json({ success: false, message: "Employee not found" });
        }
        res.status(200).json({ success: true, data: employee });
    } catch (err) {
        next(err);
    }
};
