// routes/main.js
const express = require("express");
const path = require("path");
const router = express.Router();

// Home page route
router.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

// About page route
router.get("/about", (req, res) => {
  res.send("<h1>This is the About page</h1>");
});

// Contact page route
router.get("/contact", (req, res) => {
  res.send(`
    <h1>Contact Page</h1>
    <p>Name: Brandon Vu</p>
    <p>Email: bvu001@campus.goldsmiths.ac.uk</p>
  `);
});

// Date page route
router.get("/date", (req, res) => {
  const now = new Date();
  res.send(`<h1>Current Date and Time</h1><p>${now}</p>`);
});

// Part D – Extension Tasks

// /welcome/:name route – dynamic parameter
router.get("/welcome/:name", (req, res) => {
  const name = req.params.name;
  res.send(`<h1>Welcome, ${name}!</h1><p>Remember to buy milk and chicken.</p>`);
});

// /chain route – two handlers chained together
router.get(
  "/chain",
  (req, res, next) => {
    res.write("<p>First part of the chain executed successfully.</p>");
    next();
  },
  (req, res) => {
    res.end("<p>Second part of the chain completed the response.</p>");
  }
);

// /file route – sends a static HTML file
router.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "../a.html"));
});

// Export the router
module.exports = router;
