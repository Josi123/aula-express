var express = require('express');
var router = express.Router();

/* GET home page. */
var Controller = require('./controller');

router.get('/', function(req, res, next) {
    Controller.retrieve(req, res);
   res.render('list', {title='Listagem de cervejas' });
});



module.exports = router;

