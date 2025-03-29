const { Sequelize } = require('sequelize');
require('dotenv').config();

// Conexión a MySQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
});

// Verificación de la conexión
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexión a MySQL establecida correctamente.');
    } catch (error) {
        console.error('❌ Error al conectar con MySQL:', error);
    }
};

testConnection();

module.exports = sequelize;
