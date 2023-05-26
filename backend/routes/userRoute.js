const express = require("express");
const protect = require("../middlewares/authMiddleware");
const {
  registerUser,
  loginUser,
  logout,
  getUser,
} = require("../controllers/userController");


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getuser", protect , getUser);

module.exports = router;
