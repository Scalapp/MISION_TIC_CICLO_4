import "./App.css";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Hola mundo desde app</h1>
      <Navbar/>
      <Landing/>
    </div>
  );
}

export default App;
