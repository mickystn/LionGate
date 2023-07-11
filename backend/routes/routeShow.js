
const express = require('express');
const router = express.Router();

const show = require('../controller/show')

router.get("/getRound",show.getRound)

router.post("/getBooking",show.getBooking)
router.post("/getSeat",show.getSeat)
router.post("/booking",show.booking)

router.put("/updateSeat",show.updateSeat)


module.exports = router;