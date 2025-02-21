require("dotenv").config();
const path = require("path");
const express = require("express");

const app = require("./src/app");

// Serve Frontend (React Build)
const frontendPath = path.join(__dirname, "frontend", "dist");

app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
