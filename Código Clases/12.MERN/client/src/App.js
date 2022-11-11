import "./App.css";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import React from 'react';

function App() {
  return (
    <div className="App">
      <h6>Hola mundo desde app</h6>
      
      <Navbar/>
      <Landing/>
    </div>
  );
}

export default App;
