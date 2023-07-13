
const express = require('express');
const router = express.Router();

const animal = require('../controller/animal')

router.get("/",animal.getAnimal)

router.put("/editAnimal",animal.editAnimal)

module.exports = router;