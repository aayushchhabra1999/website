var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/resume/download', function(req, res, next) {
  res.redirect("https://docs.google.com/document/d/1k8zGr_zN5rjhv-15htfcNT2NLB0ZCQZ7CzRDW8CRIkI/export?format=pdf")
})

router.get('/resume', function(req, res, next) {
  res.redirect("https://docs.google.com/document/d/1k8zGr_zN5rjhv-15htfcNT2NLB0ZCQZ7CzRDW8CRIkI/edit?usp=sharing")
})

module.exports = router;