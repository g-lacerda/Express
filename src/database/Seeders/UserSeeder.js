const User = require('../Migrations/User');

async function seedUsers() {
    for (let i = 0; i < 10; i++) {
        let descricao = i % 2 === 0 ? "Teste" : null;
        user_email = "user" + (i + 1) + "@gmail.com"
        await User.create({
            email: user_email,
            password: `${i + 1}23`,
            descricao_perfil: descricao
        });
    }

    console.log('Usuários inseridos com sucesso!');
}

module.exports = seedUsers;