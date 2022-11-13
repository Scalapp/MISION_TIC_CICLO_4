import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    //métodos
    onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {  
        e.preventDefault();  
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);
        };
//Método para la parte gráfica o front con su respectivo formulario:

    render() {
        const { errors } = this.state;  
return (
    <div className="container">
    <div style={{ marginTop: "4rem" }} className="row">
    <div className="col s8 offset-s2">
        <Link to="/" className="btn-flat waves-effect">
             <i className="material-icons  left">keyboard_backspace</i> Regresar a Inicio
        </Link>
        <div className="col s12" style={{ paddingLeft: "11.250px"}}>
            <h4> <b>Login</b> below </h4>
            <p className="grey-text text-darken-1"> ¿No tiene cuenta?<Link to="/register">Registrarse</Link></p>
        </div>
            <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                <input onChange={this.onChange}  value={this.state.email}  error={errors.email}
                id="email" type="email"/> <label htmlFor="email">correo</label>
                </div>

                <div className="input-field col s12">
                <input onChange={this.onChange}  value={this.state.password} error={errors.password}  
                id="password"  type="password"/> <label htmlFor="password">contraseña</label>
                </div>

                <div className="col s12" style={{ paddingLeft:"11.250px" }}>
                <button className="btn btn-large waves-effect waves-light hoverable blue accent3" 
                style={{width: "150px",  borderRadius: "3px",  letterSpacing: "1.5px",  marginTop: "1rem"}}
                type="submit" > Entrar </button>
                </div>
            </form>
        </div>
    </div>
    </div>
);
}
}
export default Login;



