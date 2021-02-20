var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/books', function(req, res, next) {
  res.redirect("https://www.goodreads.com/user/show/66380699-aayush-chhabra");
});

https://www.goodreads.com/user/show/66380699-aayush-chhabra

router.get('/resume', function(req, res, next) {
  res.redirect("https://docs.google.com/document/d/1k8zGr_zN5rjhv-15htfcNT2NLB0ZCQZ7CzRDW8CRIkI/edit?usp=sharing")
})

router.get('/resume2', function(req, res, next) {
  res.render('resume');
})

router.get('/resume/download', function(req, res, next) {
  res.redirect("https://docs.google.com/document/d/1k8zGr_zN5rjhv-15htfcNT2NLB0ZCQZ7CzRDW8CRIkI/export?format=pdf")
})



module.exports = router;