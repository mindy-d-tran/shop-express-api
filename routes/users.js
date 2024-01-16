const express = require("express");
const router = express.Router();

const renderPage = require('../utilities/renderPage');
const users = require("../data/users");
router.use(express.static("./style.css"));

const options = {
  title: "Users",
  tableRow: renderPage(users),
};

router
  .route("/")
  .get((req, res) => {
    res.render("users", options);
  })
  .post((req, res) => {
    if (req.body.name && req.body.username && req.body.email) {
      if (users.find((u) => u.username == req.body.username)) {
        options.errorMsg= "Username already taken";

        res.render("users", options);
        return;
      }
      if (users.find((e) => e.email == req.body.email)) {
        options.errorMsg= "Email already taken";
        res.render("users", options);
        return;
      }
      const user = {
        id: users.length + 1,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
      };

      users.push(user);
      options.tableRow = renderPage(users);
      res.render("users", options);
    } else res.json({ error: "not enough data" });
  });

router
  .route("/:id")
  .get((req, res, next) => {
    const user = users.find((u) => u.id == req.params.id);
    if (user) {
      options.title= `User ${user.id}`;
      options.tableRow = renderPage(user)
      res.render("usersId", options);
    }
    else next();
  })
  .patch((req, res, next) => {
    const user = users.find((u, i) => {
      if (u.id == req.params.id) {
        for (const key in req.body) {
          users[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (user) res.json(user);
    else next();
  })
  .delete((req, res, next) => {
    const user = users.find((u, i) => {
      if (u.id == req.params.id) {
        users.splice(i, 1);
        return true;
      }
    });

    if (user) res.json(user);
    else next();
  });

module.exports = router;
