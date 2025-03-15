import React, { useState } from "react";
import Apertura from "./Apertura";
import CompraCredito from "./CompraCredito";
import CompraEfectivo from "./CompraEfectivo";
import CompraCombinada from "./CompraCombinada";
import AnticipoClientes from "./AnticipoClientes";
import CompraPapeleria from "./CompraPapeleria";
import PagoRentas from "./PagoRentas";
import '../estilos/RegistrarTransaccion.css'

const RegistrarTransaccion = ({ agregarTransaccion }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

  const renderFormulario = () => {
    switch (opcionSeleccionada) {
      case "Apertura":
        return <Apertura agregarTransaccion={agregarTransaccion} />;
      case "Compra a Crédito":
        return <CompraCredito agregarTransaccion={agregarTransaccion} />;
      case "Compra en Efectivo":
        return <CompraEfectivo agregarTransaccion={agregarTransaccion} />;
      case "Compra Combinada":
        return <CompraCombinada agregarTransaccion={agregarTransaccion} />;
      case "Anticipo de Clientes":
        return <AnticipoClientes agregarTransaccion={agregarTransaccion} />;
      case "Compra de Papelería":
        return <CompraPapeleria agregarTransaccion={agregarTransaccion} />;
      case "Pago de Rentas Anticipadas":
        return <PagoRentas agregarTransaccion={agregarTransaccion} />;
      default:
        return <p>Por favor selecciona un tipo de transacción.</p>;
    }
  };

  return (
    <div>
      <h2>Registrar Transacción</h2>
      <select
        value={opcionSeleccionada}
        onChange={(e) => setOpcionSeleccionada(e.target.value)}
      >
        <option value="">-- Selecciona una opción --</option>
        <option value="Apertura">Apertura</option>
        <option value="Compra a Crédito">Compra a Crédito</option>
        <option value="Compra en Efectivo">Compra en Efectivo</option>
        <option value="Compra Combinada">Compra Combinada</option>
        <option value="Anticipo de Clientes">Anticipo de Clientes</option>
        <option value="Compra de Papelería">Compra de Papelería</option>
        <option value="Pago de Rentas Anticipadas">Pago de Rentas Anticipadas</option>
      </select>

      <div style={{ marginTop: "20px" }}>{renderFormulario()}</div>
    </div>
  );
};

export default RegistrarTransaccion;
