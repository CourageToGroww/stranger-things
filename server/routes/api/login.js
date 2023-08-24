const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  //Validate input
  if (!username || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    //find user by email
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    //compare pvoided password with hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    //generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET, // <replace this later with actual enviroment variable
      { expiresIn: "1h" }
    );
    //send token in response
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occured while logging in" });
  }
});

module.exports = router;
