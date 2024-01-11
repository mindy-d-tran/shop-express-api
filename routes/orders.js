const express = require('express');
const router = express.Router();

const orders = require('../data/orders');

router.route('/').get((req,res)=>{res.json(orders)});

module.exports = router;