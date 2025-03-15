import React from "react";

const BalanceGeneral = ({ transacciones = [] }) => {
  return (
    <div>
      <h2>Balance General</h2>
      <table border="1" style={{ width: "100%", marginTop: "20px", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Monto</th>
            <th>IVA</th>
            <th>Total</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {transacciones.map((transaccion, index) => (
            <tr key={index}>
              <td>{transaccion.descripcion}</td>
              <td>${transaccion.monto.toFixed(2)}</td>
              <td>{transaccion.iva ? `$${transaccion.iva.toFixed(2)}` : "N/A"}</td>
              <td>{transaccion.totalConIva ? `$${transaccion.totalConIva.toFixed(2)}` : "N/A"}</td>
              <td>{transaccion.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BalanceGeneral;
