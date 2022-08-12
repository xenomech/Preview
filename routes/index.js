const router = require('express').Router()
const { get } = require('../controllers/index')

router.get('/get', get)

module.exports = router