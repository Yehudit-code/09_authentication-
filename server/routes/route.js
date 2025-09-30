const express = require('express');
const router = express.Router();
const { foods } = require('../DB/dataBase');
const { generateToken } = require("../utils/token");
const { isAuthorized } = require("./middlewares")

const users = [
  { username: "admin", password: "1234" }
];

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = generateToken({ username });
  return res.json({ token });
});

router.post("/logout", isAuthorized, (req, res) => {
  return res.status(200).json({ message: "Logged out successfully" });
});

router.get('/', isAuthorized, (req, res) => {
  if (foods && foods.length > 0) {
    console.log(foods);
    return res.json(foods);
  } else {
    return res.status(404).json({ message: "No foods available" });
  }
});

module.exports = router;
