const express = require("express");

const app = express();
const PORT = 3000;

// Custom logging middleware
app.use((req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} - ${req.method} ${req.url}`
  );
  next();
});

// Route
app.get("/", (req, res) => {
  res.send("Welcome to the Express.js Middleware Demo!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
