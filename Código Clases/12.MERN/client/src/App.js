import "./App.css";
//import { Provider } from "react-redux";
//import store from "./store";
//import ReactDOM from 'react-dom/client';
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";  
import Login from "./components/auth/Login";  
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";  
function App() {
  return (
   

     <Router> 
     <div className="App">
      <Navbar/>
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      </div>
      </Router>
    


   
  );
}

export default App;
