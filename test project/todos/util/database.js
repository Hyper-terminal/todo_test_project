const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_shop', 'root', 'coc2001ab', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;