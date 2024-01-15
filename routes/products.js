const express = require("express");
const router = express.Router();

const products = require("../data/products");

router
  .route("/")
  .get((req, res) => {
    const productName = req.query.listingName;
    //query for product ID
    if (productName) {
      const productList = [];
      products.forEach((p) => {
        if (p.listingName.includes(productName)) productList.push(p);
      });
      res.json(productList);
      return;
    }
    res.json(products);
  })
  .post((req, res) => {
    if (req.body.listingName && req.body.price && req.body.imgSrc) {
      const product = {
        id: products.length + 1,
        listingName: req.body.listingName,
        price: req.body.price,
        imgSrc: req.body.imgSrc,
      };
      products.push(product);
      res.json(product);
    } else res.json({ error: "not enough data" });
  });

router
  .route("/:id")
  .get((req, res, next) => {
    const product = products.find((p) => p.id == req.params.id);
    if (product) res.json(product);
    else next();
  })
  .patch((req, res, next) => {
    const product = products.find((p, i) => {
      if (p.id == req.params.id) {
        for (const key in req.body) {
          products[i][key] = req.body[key];
        }
        return true;
      }
    });
    if (product) res.json(product);
    else next();
  })
  .delete((req, res, next) => {
    const product = products.find((p, i) => {
      if (p.id == req.params.id) {
        products.splice(i, 1);
        return true;
      }
    });
    if (product) res.json(product);
    else next();
  });

module.exports = router;
