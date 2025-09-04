const express = require("express");
const usersControllers = require("../controllers/users.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "GET users endpoint.",
  });
});

router.post("/", (req, res) => {
  res.json({
    message: "POST users endpoint.",
  });
});

router.patch("/:id", (req, res) => {
  res.json({
    message: "UPDATE users endpoint.",
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    message: "DELETE users endpoint.",
  });
});

module.exports = router;
