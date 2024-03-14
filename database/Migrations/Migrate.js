const sequelize = require('../connection');
const User = require('./User');

const args = process.argv.slice(2);

async function migrate() {
    if (args.includes('--renew')) {
        console.log('Renovando as tabelas...');
        await sequelize.sync({ force: true });
        console.log('Tabelas renovadas com sucesso.');
    } else {
        console.log('Migrando tabelas...');
        await sequelize.sync({ alter: true });
        console.log('Migração completada.');
    }

    if (args.includes('--seed')) {
        console.log('Executando seeders...');
        await require('../Seeders/DatabaseSeeder')();
        console.log('Seeders executados com sucesso.');
    }
}

migrate().then(() => {
    console.log('Migração finalizada.');
    process.exit();
}).catch(error => {
    console.error('Erro na migração:', error);
    process.exit(1);
});
