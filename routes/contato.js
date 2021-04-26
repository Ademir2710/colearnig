var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contato', { title: 'Ademir Gonçalves' });
});

router.get('/documento', function(req, res, next) {
    res.render('documento', { documento:["cpf7699661-6352" , "cpf99999999999", "cpf88888888888"], title: "Ademir Gonçalves" });
  });

router.get('/ademir', function(req, res, next) {
  res.render('ademir', { title: 'Ademir Inacio Gonçalves' });
});

module.exports = router;
