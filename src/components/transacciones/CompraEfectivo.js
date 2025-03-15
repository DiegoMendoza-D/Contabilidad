import React, { useState } from "react";

const CompraEfectivo = ({ agregarTransaccion }) => {
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const montoSinIva = parseFloat(monto || 0);

    agregarTransaccion({
      descripcion,
      monto: montoSinIva,
      iva: null, // No hay IVA para esta categoría
      totalConIva: null, // No aplica
      categoria: "Compra en Efectivo",
    });

    setDescripcion("");
    setMonto("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Compra en Efectivo</h3>
      <div>
        <label>Descripción:</label>
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Monto:</label>
        <input
          type="number"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          required
        />
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default CompraEfectivo;
