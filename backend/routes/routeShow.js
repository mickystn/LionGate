
const express = require('express');
const router = express.Router();

const show = require('../controller/show')

router.get("/getRound",show.getRound)

router.post("/getSeat",show.getSeat)


module.exports = router;