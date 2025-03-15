import React from "react";

const EsquemasMayor = ({ transacciones }) => {
  const agrupadasPorCuenta = transacciones.reduce((acc, transaccion) => {
    const { categoria } = transaccion;
    if (!acc[categoria]) acc[categoria] = [];
    acc[categoria].push(transaccion);
    return acc;
  }, {});

  return (
    <div>
      <h2>Esquemas de Mayor</h2>
      {Object.keys(agrupadasPorCuenta).map((cuenta, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{cuenta}</h3>
          <table border="1" style={{ width: "100%", textAlign: "center" }}>
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Monto</th>
                <th>IVA</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {agrupadasPorCuenta[cuenta].map((transaccion, i) => (
                <tr key={i}>
                  <td>{transaccion.descripcion}</td>
                  <td>${transaccion.monto.toFixed(2)}</td>
                  <td>{transaccion.iva ? `$${transaccion.iva.toFixed(2)}` : "N/A"}</td>
                  <td>{transaccion.totalConIva ? `$${transaccion.totalConIva.toFixed(2)}` : "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default EsquemasMayor;
