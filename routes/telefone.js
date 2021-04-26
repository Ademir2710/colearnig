var express = require('express');
var router = express.Router();
var telefones = []

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('telefone', { telefone:telefones, title: "Ademir Gonçalves" });
  });

  router.post("/", function(req, res, next) {
    const tel = {numero:req.body.numero, description: req.body.description}
    telefones.push(tel)
    console.log(req.body)
    res.redirect("/telefone")

  });


module.exports = router;
