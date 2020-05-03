import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router> //Usa el browserRouter para asignar las rutas a distintos componentes
      <Navbar /> //Manda a llamar el componente Navbar
      <br /> //Agrega un line break
      <Route path="/" exact component={ExercisesList} /> //Manda a llamar el componente ExercisesList cuando vamos a la ruta "/"
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router> 
  );
}

export default App;
