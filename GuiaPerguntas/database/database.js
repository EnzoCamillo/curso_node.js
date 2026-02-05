var sequelize = require("sequelize");
const connection = new sequelize.Sequelize('guiaperguntas','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;