require("dotenv").config();
require("./models/User");

const express = require("express");
const sequelize = require("./db");
const authRoutes = require("./routes/api/auth");

const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173",
};
// Enable CORS with the specified options
app.use(cors(corsOptions));
// Middleware
app.use(express.json());

const registerRoutes = require("./routes/api/register");
const loginRoute = require("./routes/api/login");

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/login", loginRoute);

// Start the server after syncing the database
sequelize
  .sync()
  .then(() => {
    console.log("Database synced sucessfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error syncing database:", err);
  });
