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
