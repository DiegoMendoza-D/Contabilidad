import React, { useState } from "react";

const Apertura = ({ agregarTransaccion }) => {
  const [caja, setCaja] = useState("");
  const [mercancia, setMercancia] = useState("");
  const [local, setLocal] = useState("");
  const [terreno, setTerreno] = useState("");
  const [mobiliario, setMobiliario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear las transacciones para cada activo
    const categorias = [
      { descripcion: "Caja", monto: parseFloat(caja || 0), categoria: "Activo" },
      { descripcion: "Mercancía", monto: parseFloat(mercancia || 0), categoria: "Activo" },
      { descripcion: "Local", monto: parseFloat(local || 0), categoria: "Activo" },
      { descripcion: "Terreno", monto: parseFloat(terreno || 0), categoria: "Activo" },
      { descripcion: "Mobiliario", monto: parseFloat(mobiliario || 0), categoria: "Activo" },
    ];

    // Agregar cada transacción al balance general
    categorias.forEach((transaccion) => {
      if (transaccion.monto > 0) { // Solo registra las que tienen monto mayor a 0
        agregarTransaccion(transaccion);
      }
    });

    // Limpiar los campos
    setCaja("");
    setMercancia("");
    setLocal("");
    setTerreno("");
    setMobiliario("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Asiento de Apertura</h3>

      <div>
        <label>Caja:</label>
        <input
          type="number"
          value={caja}
          onChange={(e) => setCaja(e.target.value)}
          placeholder="Monto en Caja"
        />
      </div>
      <div>
        <label>Mercancía:</label>
        <input
          type="number"
          value={mercancia}
          onChange={(e) => setMercancia(e.target.value)}
          placeholder="Valor de Mercancía"
        />
      </div>
      <div>
        <label>Local:</label>
        <input
          type="number"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          placeholder="Valor del Local"
        />
      </div>
      <div>
        <label>Terreno:</label>
        <input
          type="number"
          value={terreno}
          onChange={(e) => setTerreno(e.target.value)}
          placeholder="Valor del Terreno"
        />
      </div>
      <div>
        <label>Mobiliario:</label>
        <input
          type="number"
          value={mobiliario}
          onChange={(e) => setMobiliario(e.target.value)}
          placeholder="Valor del Mobiliario"
        />
      </div>

      <button type="submit">Registrar</button>
    </form>
  );
};

export default Apertura;
