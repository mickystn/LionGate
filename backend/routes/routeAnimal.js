
const express = require('express');
const router = express.Router();

const animal = require('../controller/animal')

router.get("/",animal.getAnimal)

module.exports = router;