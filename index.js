/**
 * Project: create an express api
 * users, products, order
 */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.get('/', (req,res)=>{
    res.send('i am alive!')
})

app.get("/api", (req, res) => {
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
      }
    ]
  });
});

app.listen(port, () => console.log("server port: " + port));
