const express = require('express');
const router = express.Router();

const products = require('../data/products');

router.route('/').get((req,res)=>{
    res.json(products);
}).post((req,res)=>{
    if(req.body.listingName && req.body.price && req.body.imgSrc){
        const product = {
            id: products.length+1,
            listingName: req.body.listingName,
            price: req.body.price,
            imgSrc: req.body.imgSrc
        };
        products.push(product);
        res.json(product);
    } else res.json({error: "not enough data"});
})

module.exports = router;