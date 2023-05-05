const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Todo = sequelize.define("todo", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: { type: Sequelize.BOOLEAN, defaultValue: false },
});

module.exports = Todo;
