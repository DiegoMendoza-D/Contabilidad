const express = require('express');
const router = express.Router();
const { Transaccion } = require('../models/index'); // Importamos el modelo de transacciones

// Crear una nueva transacción
router.post('/', async (req, res) => {
    try {
        const nuevaTransaccion = await Transaccion.create(req.body);
        res.status(201).json(nuevaTransaccion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener todas las transacciones
router.get('/', async (req, res) => {
    try {
        const transacciones = await Transaccion.findAll();
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar una transacción por ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Transaccion.update(req.body, {
            where: { id }
        });

        if (updated) {
            const transaccionActualizada = await Transaccion.findByPk(id);
            res.json(transaccionActualizada);
        } else {
            res.status(404).json({ error: 'Transacción no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Eliminar una transacción por ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Transaccion.destroy({
            where: { id }
        });

        if (deleted) {
            res.json({ message: 'Transacción eliminada correctamente' });
        } else {
            res.status(404).json({ error: 'Transacción no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
