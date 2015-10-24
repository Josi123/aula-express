var express = require('express');
var router = express.Router();

/* GET home page. */
var Controller = require('./controller');

router.get('/', function(req, res, next) {
    Controller.retrieve(req, res);
    
});

router.post('/', function(req, res, next) {
    Controller.create(req, res);
    
});

router.uptade('/', function(req, res, next) {
    Controller.create(req, res);
    
});

module.exports = router;

