const express = require('express');
const router = express.Router();
const { foods } = require('../DB/dataBase');
const axios = require('axios');

router.get('/', (req, res) => {
    console.log(foods);
    res.json(foods

    );
});

module.exports = router;
