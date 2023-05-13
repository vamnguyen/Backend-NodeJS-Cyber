const express = require('express')
const routerStudent = require("./student.router")
const router = express.Router()

// url => http://localhost:6969/students
router.use("/students", routerStudent)

module.exports = router;