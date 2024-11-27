const express = require("express");
const { registerAdmin, getAdminDashboard } = require("../controllers/adminController");
const { authenticate, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerAdmin);
router.get("/dashboard", authenticate, authorize("admin"), getAdminDashboard);

module.exports = router;
