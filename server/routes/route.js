const express = require('express');
const router = express.Router();
const { foods } = require('../DB/dataBase');
const { generateToken } = require("../utils/token");

const users = [
    { username: "admin", password: "1234" }
];
const tokens = [];

function addToken(token) {
    tokens.push(token);
}

function removeToken(token) {
    console.log("Before removing token:", tokens);
  const index = tokens.indexOf(token);
  if (index !== -1) {
    tokens.splice(index, 1); 
    console.log("After removing token:", tokens);
    return true;
  }
  return false;
}

router.post("/logout", (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Token is required" });
  }

  const removed = removeToken(token);

  if (removed) {
    return res.status(200).json({ message: "Logged out successfully" });
  } else {
    return res.status(404).json({ message: "Token not found" });
  }
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateToken({ username });
    addToken(token);
console.log(tokens);
    res.json({ token });
});
router.get('/', (req, res) => {
    console.log(foods);
    if (res.jsom) {
        res.json(foods);
    } else {
        res.status(401).json({ message: "no food" });
    }
});

module.exports = router;
