
const express = require('express');
const router = express.Router();

const show = require('../controller/show')

router.get("/round",show.round)
router.get("/getRound",show.getRound)
router.get("/createRound",show.createRound)
router.get("/getRoundedit",show.getRoundedit)
router.get("/getRoom",show.getRoom)

router.post("/getBooking",show.getBooking)
router.post("/getSeat",show.getSeat)
router.post("/booking",show.booking)

router.put("/editRound",show.editRound)
router.put("/updateSeat",show.updateSeat)


module.exports = router;