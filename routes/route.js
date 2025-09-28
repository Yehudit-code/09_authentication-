const express = require('express');
const router = express.Router();
const { food } = require('../DB/dataBase');


router.get('/', (req, res) => {
    console.log(food);
    res.json(food);
});
