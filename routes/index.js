var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  res.status(200).end('Hello world')
})

module.exports = router
