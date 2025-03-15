import React, { useState } from "react";

const AnticipoClientes = ({ agregarTransaccion }) => {
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const montoSinIva = parseFloat(monto || 0);
    const iva = montoSinIva * 0.16;
    const totalConIva = montoSinIva + iva;

    agregarTransaccion({
      descripcion,
      monto: montoSinIva,
      iva,
      totalConIva,
      categoria: "Anticipo de Clientes",
    });

    setDescripcion("");
    setMonto("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Anticipo de Clientes</h3>
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

export default AnticipoClientes;
