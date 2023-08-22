const express = require("express");
const sequelize = require("./db");
const authRoutes = require("./routes/api/auth");

const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const registerRoutes = require("./routes/api/register");

// Middleware
app.use(express.json());
// Enable CORS for all routes
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/register", registerRoutes);

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
