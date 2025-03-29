const express = require("express");
const router = express.Router();
const { Transaccion } = require("../models");

// 📌 1. Balance General
router.get("/balance-general", async (req, res) => {
    try {
        const activos = await Transaccion.findAll({ where: { categoria: "Activo" } });
        const pasivos = await Transaccion.findAll({ where: { categoria: "Pasivo" } });
        const capital = await Transaccion.findAll({ where: { categoria: "Capital" } });

        res.json({
            balanceGeneral: {
                activos: activos.reduce((sum, t) => sum + t.total, 0),
                pasivos: pasivos.reduce((sum, t) => sum + t.total, 0),
                capital: capital.reduce((sum, t) => sum + t.total, 0),
            },
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 📌 2. Estado de Resultados
router.get("/estado-resultados", async (req, res) => {
    try {
        const ingresos = await Transaccion.findAll({ where: { categoria: "Ingreso" } });
        const gastos = await Transaccion.findAll({ where: { categoria: "Gasto" } });

        const totalIngresos = ingresos.reduce((sum, t) => sum + t.total, 0);
        const totalGastos = gastos.reduce((sum, t) => sum + t.total, 0);

        res.json({
            estadoResultados: {
                ingresos: totalIngresos,
                gastos: totalGastos,
                utilidadNeta: totalIngresos - totalGastos,
            },
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 📌 3. Estado de Cambios en el Capital Contable
router.get("/capital-contable", async (req, res) => {
    try {
        const capital = await Transaccion.findAll({ where: { categoria: "Capital" } });
        const retiros = await Transaccion.findAll({ where: { categoria: "Retiros" } });

        const totalCapital = capital.reduce((sum, t) => sum + t.total, 0);
        const totalRetiros = retiros.reduce((sum, t) => sum + t.total, 0);

        res.json({
            cambiosCapital: {
                capitalInicial: totalCapital,
                retiros: totalRetiros,
                capitalFinal: totalCapital - totalRetiros,
            },
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 📌 4. Estado de Flujos de Efectivo
router.get("/flujos-efectivo", async (req, res) => {
    try {
        const ingresos = await Transaccion.findAll({ where: { categoria: "Ingreso" } });
        const gastos = await Transaccion.findAll({ where: { categoria: "Gasto" } });

        const flujoOperativo = ingresos.reduce((sum, t) => sum + t.total, 0) - 
                               gastos.reduce((sum, t) => sum + t.total, 0);

        res.json({
            flujosEfectivo: {
                flujoOperativo,
            },
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
