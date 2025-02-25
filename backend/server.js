require("dotenv").config();
const path = require("path");
const express = require("express");

const app = require("./src/app");


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "./frontend/dist")));  


  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, "./frontend/dist", "index.html"));
  });
}

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
