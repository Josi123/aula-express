var express = require('express');
var router = express.Router();

/* GET home page. */
var Controller = require('./..controller');

router.get('/', function(req, res, next) {
    Controller.retrieve(req, res);
    
});

router.get('/', function(req, res, next) {
    Controller.create(req, res);
    
});

module.exports = router;

