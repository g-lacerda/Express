const Sequelize = require("sequelize");

const sequelize = new Sequelize('express', 'express', 'express', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(() => {
    console.log("Conectado ao DB");
}).catch(() => {
    console.log("Falha na conexão com o DB");
});

module.exports = sequelize;
