const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;
const routes = require("./routes/users");

// let { users } = require("./data");

app.use(express.json());
app.use(routes);

app.get("/", (req, res) => res.send("default route"));

app.listen(port, () => {
  console.log("app is listening on:", port);
});
