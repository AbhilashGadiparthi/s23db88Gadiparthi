var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Houses', { title: 'Search Results' });
});

var express = require('express');
const Houses_controlers= require('../controllers/Houses');
var router = express.Router();
/* GET costumes */
router.get('/', Houses_controlers.Houses_view_all_Page );
module.exports = router;

// GET request for one costume.
router.get('/Houses/:id', Houses_controlers.Houses_detail);
module.exports = router;

/* GET detail costume page */
router.get('/detail', Houses_controlers.Houses_view_one_Page);