const express = require("express");
const router = express.Router();
const path = require('path');
const products = [];
router.get('/add-product', (req, res, next) => {
    console.log("Admin Page");
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});


router.post('/add-product.html', (req, res, next) => {

    console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;

