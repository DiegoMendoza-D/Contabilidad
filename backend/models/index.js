const db = require('../config/database'); 
const Transaccion = require('./Transaccion'); 

db.sync()
    .then(() => console.log('📌 Base de datos sincronizada'))
    .catch(err => console.error('❌ Error al sincronizar BD:', err));

module.exports = { Transaccion };
