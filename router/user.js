const express = require("express")
const router = express.Router()

const { register, login } = require("../router_handler/user")

router.post("/register", register)
router.post("/login", login)

module.exports = router
