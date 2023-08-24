const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../../models/User");

// Logout Route
router.post("/logout", (req, res) => {
  res.json({ message: "Logged out successfully." });
});

// Register Route
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user in the database
  try {
    await User.create({ username, email, password: hashedPassword });
    res.json({ message: "Registration successful." });
  } catch (error) {
    // Handle any errors
    res
      .status(500)
      .json({ error: "An error occurred while registering the user." });
  }

  res.json({ message: "Registration successful." });
});

module.exports = router;

/* 
router.post("/login", async (req, res) => {
  const { username, password } = req.body;


  const user = await User.findOne({ where: { username } });


  if (!user) {
    return res.status(401).json({ error: "Invalid username." });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid password." });
  }
  const token = jwt.sign({ username }, "secret-key");
  res.json({ token, username });
});

*/
