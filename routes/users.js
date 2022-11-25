var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res) {
  res.send(`You're so cool`);
});

router.get('/new', function(req, res) {
  res.send('Getting new user');
});

module.exports = router;
