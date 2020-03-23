var express = require('express');
var router = express.Router();

var controller = require('../controllers/getRequestController');

/* GET home page. */
router.get('/', function(req, res, next) {
  controller.index(req, res);
});

module.exports = router;
