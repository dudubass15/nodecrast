var express = require('express');
var router = express.Router();

var controller = require('../controllers/homeController');

/* GET home page. */
router.get('/', function(req, res, next) {
  controller.index(req, res);
  // res.render('index', { title: 'Express' });
});

module.exports = router;
