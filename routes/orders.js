const express = require('express');
const router = express.Router();

const orders = require('../data/orders');

router
.route('/')
.get((req,res)=>{res.json(orders)})
.post((req,res)=>{
    if(req.body.userId && req.body.orderList && req.body.trackingNumber){
        const date = new Date();
        const order = {
            id: orders.length+1,
            userId: req.body.userId,
            trackingNumber: req.body.trackingNumber,
            orderDate: `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`,
            orderList: req.body.orderList,
            total: req.body.orderList.reduce((tempSum, element)=> tempSum + (element.price * element.quantity),0)
        }
        orders.push(order);
        res.json(order);
    } else res.json({error: 'not enough data'});
});

router
    .route('/:id')
    .get((req,res,next)=>{
        const order = orders.find((o)=> o.id == req.params.id);
        if(order) res.json(order);
        else next();
    })
    .delete((req,res,next)=>{
        const order = orders.find((o,i)=>{
            if(this.prototype.id == req.params.id){
                orders.splice(i,1);
                return true;
            }
        });
        if(order) res.json(order);
        else next();
    })
module.exports = router;