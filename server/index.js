const express = require("express");
const sequelize = require("./db");
const authRoutes = require("./routes/api/auth");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

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
