var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let firstname1=req.query.firstname;
    console.log(firstname1);
    let secondname1=req.query.lastname;
    console.log(secondname1);
    res.render('hello', { name: firstname1,name1: secondname1 });

});

router.post('/', function(req, res, next) {
    let firstname1=req.body.firstname;
    console.log(firstname1);
    res.render('hello', { name: firstname1,name1: secondname1 });


module.exports = router;