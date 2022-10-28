import "./App.css";
import { Link } from "react-router-dom";


export default function App() {
  return (
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
  );
}
