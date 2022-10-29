import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Egresos from "./componentes/Egresos";
import Ingresos from "./componentes/Ingresos";


export default function App() {
  return (
    <>
    <div>
      <h1>Este es mi pequeño comercio!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Incresos</Link> |{" "}
        <Link to="/expenses">Egresos-gastos</Link>
      </nav>
    </div>
<Routes>
<Route path="/invoices" element={<Ingresos/>}/>
<Route path="/expenses" element={<Egresos/>}/>
</Routes>
</>
  );
}
