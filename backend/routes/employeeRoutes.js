const express = require("express");
const { registerEmployee, getEmployeeDetails } = require("../controllers/employeeController");
const { authenticate, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerEmployee);
router.get("/details", authenticate, authorize("employee"), getEmployeeDetails);

module.exports = router;
