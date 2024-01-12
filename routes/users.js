const express = require("express");
const router = express.Router();

const users = require("../data/users");

router
  .route("/")
  .get((req, res) => {
    res.json(users);
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
        id: users.length+1,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
      };

      users.push(user);
      res.json(user);
    } else res.json({error: "not enough data"});
  });

module.exports = router;
