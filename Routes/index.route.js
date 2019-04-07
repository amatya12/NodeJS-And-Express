const express = require('express')
const router = express.Router()


router.use('/rest' , require('./tickets.route'))
module.exports = router

