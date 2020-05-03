import React, {Component} from "react"; //usa react & component
import {Link} from "react-router-dom"; //nos deja agregar links a las rutas con react-router-dom

export default class Navbar extends Component { // nombre del componente y lo identifica como componente
    render(){ //Todos los componentes tienen que rendear algo
        return( //Inicia lo que vamos a mostrar en el html
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className ="navbar-brand">ExcerTracker</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Exercises</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create Exercise Log</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/user" className="nav-link">Create User</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}