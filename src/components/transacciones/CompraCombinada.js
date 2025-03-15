import React, { useState } from "react";

const CompraCombinada = ({ agregarTransaccion }) => {
  const [descripcion, setDescripcion] = useState("");
  const [montoEfectivo, setMontoEfectivo] = useState("");
  const [montoCredito, setMontoCredito] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const efectivo = parseFloat(montoEfectivo || 0);
    const credito = parseFloat(montoCredito || 0);
    const total = efectivo + credito;
    const iva = total * 0.16;
    const totalConIva = total + iva;

    agregarTransaccion({
      descripcion,
      monto: total,
      iva,
      totalConIva,
      categoria: "Compra Combinada",
    });

    setDescripcion("");
    setMontoEfectivo("");
    setMontoCredito("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Compra Combinada</h3>
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
        <label>Monto Efectivo:</label>
        <input
          type="number"
          value={montoEfectivo}
          onChange={(e) => setMontoEfectivo(e.target.value)}
        />
      </div>
      <div>
        <label>Monto Crédito:</label>
        <input
          type="number"
          value={montoCredito}
          onChange={(e) => setMontoCredito(e.target.value)}
        />
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default CompraCombinada;
