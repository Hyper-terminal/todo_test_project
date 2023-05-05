const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("todo-routes");

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(todoRoutes);

app
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.error(err));
