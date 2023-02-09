const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  getUser,
  registerUser,
  loginUser,
} = require("../controllers/userController");

router.get("/", protect, getUser);
router.post("/", registerUser);
router.post("/login", loginUser);

module.exports = router;
