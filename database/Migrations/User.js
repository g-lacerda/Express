const Sequelize = require('sequelize');
const sequelize = require('../connection');

const User = sequelize.define('user', {
	id_user: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
		fieldName: 'id_user'
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	descricao_perfil: {
		type: Sequelize.TEXT
	}
});

module.exports = User;