const Sequelize = require("sequelize");
const sequelize = new Sequelize('express', 'express', 'express', {
	host: 'localhost',
	dialect: 'postgres'
});
//database, user, password 

sequelize.authenticate().then(
	function(){
		console.log("Conectado DB")
	}
).catch(
	function(){
		console.log("Falha conexao DB")
	}
);

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

User.sync({force: true}).then(() => {;
for (var i=0; i<10; i++){
	if(i%2==0){
		var descricao = "Teste";
	}
	User.create({
		email: ("user"+(i+1)+"@gmail.com"),
		password: ((i+1)+"23") ,
		descricao_perfil: descricao ?? Null
	});
}
}).catch((error) => {
console.log(error)
});

module.exports = User;

//User.sync({force: true});
