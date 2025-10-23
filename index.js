// index.js
const express = require("express");
const app = express();
const port = 8000;

// Import the routes from routes/main.js
const mainRoutes = require("./routes/main");

// Use the imported routes
app.use("/", mainRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Node server is running on port ${port}...`);
});
