const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv'); // Para variables de entorno
const db = require('./config/database'); // Importa la configuración de la base de datos
const transaccionesRoutes = require('./routes/transacciones'); // Importa las rutas de transacciones
const reportesRoutes = require('./routes/reportes'); // Importar rutas de reportes

dotenv.config(); // Carga variables de entorno desde .env

const app = express();

// Middleware
app.use(express.json()); // Permite recibir datos en formato JSON
app.use(cors()); // Habilita CORS para solicitudes desde el frontend

// Rutas
app.use('/api/transacciones', transaccionesRoutes);
app.use('/api/reportes', reportesRoutes); // Habilitar rutas de reportes

// Verificar conexión a la base de datos
const conectarDB = async () => {
    try {
        await db.authenticate();
        console.log('✅ Conexión a la base de datos exitosa');

        // Sincronizar modelos (asegúrate de que no borre datos existentes)
        await db.sync({ alter: true });
        console.log('📦 Base de datos sincronizada');
    } catch (err) {
        console.error('❌ Error al conectar/sincronizar la base de datos:', err);
    }
};

conectarDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
 