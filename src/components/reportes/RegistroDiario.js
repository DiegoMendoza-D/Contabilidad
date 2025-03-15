import React from "react";

const RegistroDiario = ({ transacciones }) => {
  return (
    <div>
      <h2>Registro en Diario</h2>
      <table border="1" style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Fecha</th>
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
              <td>{new Date().toLocaleDateString()}</td>
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

export default RegistroDiario;
