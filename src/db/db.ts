import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    database: 'link_preview_db',
    username: 'user',
    password: 'pass',
    dialect: 'postgres',
    host: 'db',
    port: 5432,
    models: ['../models'],
    logging: false,
});

export const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
