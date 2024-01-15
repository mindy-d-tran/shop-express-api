const express = require("express");
const router = express.Router();

const users = require("../data/users");
router.use(express.static("./styles"));

router
  .route("/")
  .get((req, res) => {
    let test = "";
    users.forEach((key) => {
      test+=(`<tr>
            <td>${key.id}</td>
            <td>${key.name}</td>
            <td>${key.username}</td>
            <td>${key.email}</td>
        </tr>`);
    });
    // console.log(test);
    const options = {
      title: "Users",
      tableRow: test,
    };
    res.render("users", options);
  })
  .post((req, res) => {
    if (req.body.name && req.body.username && req.body.email) {
      if (users.find((u) => u.username == req.body.username)) {
        res.json({ error: "username already taken" });
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
      res.json(user);
    } else res.json({ error: "not enough data" });
  });

router
  .route("/:id")
  .get((req, res, next) => {
    const user = users.find((u) => u.id == req.params.id);
    if (user) res.json(user);
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
