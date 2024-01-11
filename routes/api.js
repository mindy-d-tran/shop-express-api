/**
 * Project: create an express api
 * users, products, order
 */
const express = require("express");

// importing routes
const users = require("./users");

const router = express.Router();

// Adding some HATEOAS links

router.route("/").get((req, res) => {
  res.json({
    links: [
      {
        href: "/api/users",
        rel: "users",
        type: "GET",
      },
      {
        href: "/api/users",
        rel: "users",
        type: "POST",
      },
      {
        href: "/api/products",
        rel: "products",
        type: "GET",
      },
      {
        href: "/api/products",
        rel: "products",
        type: "POST",
      },
      {
        href: "/api/orders",
        rel: "orders",
        type: "GET",
      },
      {
        href: "/api/orders",
        rel: "orders",
        type: "POST",
      },
    ],
  });
});

router.use("/users", users);

module.exports = router;
