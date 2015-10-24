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

router.put('/', function(req, res, next) {
    Controller.create(req, res);
    
});

router.delete('/', function(req, res, next) {
    Controller.delete(req, res);
    
});



module.exports = router;

