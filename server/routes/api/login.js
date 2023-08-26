const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

router.post("/", async (req, res) => {
  console.log("Request Body:", req.body);
  const { username, password } = req.body;
  // Validate input
  if (!username || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Find user by username
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    // Compare provided password with hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET, // <replace this later with actual environment variable
      { expiresIn: "1h" }
    );

    // Create a user object to send in the response
    const userResponse = {
      username: user.username,
      // Add other user properties that you want to include in the response
    };

    // Send token and user object in response
    res.json({ token, user: userResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while logging in" });
  }
});

module.exports = router;
