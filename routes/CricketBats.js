var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Cricket Bats', { title: 'Search Results Cricket Bats' });
});

module.exports = router;
