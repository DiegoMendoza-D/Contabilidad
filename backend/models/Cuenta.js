const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cuenta = sequelize.define('Cuenta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM('activo', 'pasivo', 'capital', 'ingreso', 'gasto'),
        allowNull: false
    }
}, {
    tableName: 'cuentas',
    timestamps: false
});

module.exports = Cuenta;
