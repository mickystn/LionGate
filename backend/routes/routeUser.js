
const express = require('express');
const router = express.Router();

const users = require('../controller/users')

router.post("/Register",users.register)
router.post("/login",users.login)
router.post("/auth",users.auth)
router.get("/",users.getAlluser)

module.exports = router;