import React from "react";

const BalanzaComprobacion = ({ transacciones }) => {
  const saldos = transacciones.reduce((acc, transaccion) => {
    const { categoria, monto } = transaccion;
    if (!acc[categoria]) acc[categoria] = 0;
    acc[categoria] += monto;
    return acc;
  }, {});

  return (
    <div>
      <h2>Balanza de Comprobación</h2>
      <table border="1" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Cuenta</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(saldos).map(([cuenta, total], index) => (
            <tr key={index}>
              <td>{cuenta}</td>
              <td>${total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BalanzaComprobacion;
