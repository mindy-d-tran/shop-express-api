/**
 * a mini app?
 */
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

// importing routes
const api = require("./routes/api");

const app = express();
const port = 3000;
app.use(express.static("./assets"));

app.engine("owo", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    const render = content
      .toString()
      .replace("#title#", `<title>${options.title}</title>`)
      .replace("#content#", `<h1>${options.content}</h1>`)
      .replace("#error-msg#", (`<p>${options.errorMsg || ""}</p>`))
      .replace("#table-row#", options.tableRow);
    return callback(null, render);
  });
});

app.use(express.static('./styles'));

app.set("views", "./views");
app.set("view engine", "owo");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// middleware
app.use((req, res, next) => {
  const time = new Date();
  console.log(
    `${time.toLocaleTimeString()}: Received a ${req.method} request to ${
      req.url
    }.`
  );
  if (Object.keys(req.body).length > 0) {
    console.log("Data:");
    console.log(`${JSON.stringify(req.body)}`);
  }
  next();
});

app.use("/api/", api);

app.get("/", (req, res) => {
  // res.send("i am alive!");
  const options = {
    title: 'Home',
    content: 'Welcome'
  }
  res.render('index', options);
  // res.send("Welcome")
});
app.all("*", (req, res) => {
  res.status = 404;
  res.send("404 can't find the page");
});

// error handling middle ware code from per scholas
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(port, () => console.log("server port: " + port));
