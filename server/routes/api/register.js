const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../../models/User");

router.post("/", async (req, res) => {
  const { email, username, password } = req.body;

  // Validate the input
  if (!email || !username || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert the new user into the database
    await User.create({
      email,
      username,
      password: hashedPassword,
    });

    // Send a success response
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    // Handle any errors
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the user" });
  }
});

module.exports = router;
