const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cuenta = require('./Cuenta');

const Transaccion = sequelize.define('Transaccion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    monto: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    iva: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
    },
    total: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    cuenta_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Cuenta,
            key: 'id'
        }
    },
    categoria: {  // ✅ Se agregó la categoría
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'transacciones',
    timestamps: false
});

module.exports = Transaccion;
