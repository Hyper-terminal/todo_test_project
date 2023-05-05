const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const todoRoutes = require("./routes/todo-routes");
const sequelize = require("./util/database");

const app = express();

app.use(cors())
app.use(bodyParser.json({ extended: true }));
app.use(todoRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.error(err));
