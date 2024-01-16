const express = require("express");
const router = express.Router();

const renderPage = require('../utilities/renderPage');
const users = require("../data/users");
router.use(express.static("./style.css"));

router
  .route("/")
  .get((req, res) => {
    const options = {
      title: "Users",
      tableRow: renderPage(users),
    };
    res.render("users", options);
  })
  .post((req, res) => {
    if (req.body.name && req.body.username && req.body.email) {
      if (users.find((u) => u.username == req.body.username)) {
        const options = {
          title: "Users",
          tableRow: renderPage(users),
          errorMsg: "Username already taken"
        };
        res.render("users", options);
        // res.json({ error: "username already taken" });
        return;
      }
      if (users.find((e) => e.email == req.body.email)) {
        res.json({ error: "email already taken" });
        return;
      }
      const user = {
        id: users.length + 1,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
      };

      users.push(user);
      const options = {
        title: "Users",
        tableRow: renderPage(users),
      };
      res.render("users", options);
    } else res.json({ error: "not enough data" });
  });

router
  .route("/:id")
  .get((req, res, next) => {
    const user = users.find((u) => u.id == req.params.id);
    if (user) {
      const options = {
        title: `User ${user.id}`,
        tableRow: renderPage(user),
      };
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
