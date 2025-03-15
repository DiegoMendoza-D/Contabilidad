import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Importaciones de los componentes desde las carpetas correspondientes
import RegistrarTransaccion from "./components/transacciones/RegistrarTransaccion";
import RegistroDiario from "./components/reportes/RegistroDiario";
import EsquemasMayor from "./components/reportes/EsquemasMayor";
import BalanzaComprobacion from "./components/reportes/BalanzaComprobacion";
import BalanceGeneral from "./components/reportes/BalanceGeneral";

const App = () => {
  const [transacciones, setTransacciones] = useState([]);

  const agregarTransaccion = (nuevaTransaccion) => {
    setTransacciones([...transacciones, nuevaTransaccion]);
  };

  return (
    <Router>
      <div>
        {/* Menú de navegación */}
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/registro-diario">Registro Diario</Link></li>
            <li><Link to="/esquemas-mayor">Esquemas de Mayor</Link></li>
            <li><Link to="/balanza-comprobacion">Balanza de Comprobación</Link></li>
            <li><Link to="/balance-general">Balance General</Link></li>
          </ul>
        </nav>

        {/* Rutas definidas */}
        <Routes>
          <Route
            path="/"
            element={<RegistrarTransaccion agregarTransaccion={agregarTransaccion} />}
          />
          <Route
            path="/registro-diario"
            element={<RegistroDiario transacciones={transacciones} />}
          />
          <Route
            path="/esquemas-mayor"
            element={<EsquemasMayor transacciones={transacciones} />}
          />
          <Route
            path="/balanza-comprobacion"
            element={<BalanzaComprobacion transacciones={transacciones} />}
          />
          <Route
            path="/balance-general"
            element={<BalanceGeneral transacciones={transacciones} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
