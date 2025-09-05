const express = require("express");
const usersControllers = require("../controllers/users.js");
const router = express.Router();

router.get("/", usersControllers.getAllUser);

router.post("/", usersControllers.createUser);

router.patch("/:id", usersControllers.updateUser);

router.delete("/:id", usersControllers.deleteUser);

module.exports = router;
