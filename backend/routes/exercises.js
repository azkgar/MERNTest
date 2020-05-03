const router = require("express").Router(); 
let Exercise = require("../models/exercise.model"); 

router.route("/") 
.get((req,res)=>{ 
    Exercise.find() 
        .then(exercises => res.json(exercises)) 
        .catch(err => res.status(400).json ("Error: " + err)); 
});

router.route("/add") 
.post((req,res)=>{ 
    const username = req.body.username; 
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise ({ 
        username,
        description,
        duration,
        date,
    });
    
    newExercise.save() 
        .then(()=> res.json("Exercise added!")) 
        .catch(err=> res.status(400).json("Error: " + err));  
});

router.route("/:id") // crea una ruta dinámica para los ids de la database
.get((req,res)=>{
    Exercise.findById(req.params.id) //Busca el id del url en el database
        .then(exercise => res.json(exercise))// Si existe lo vamos a mostrar
        .catch(err => res.status(400).json("Error: " + err)); //Si no existe mandamos el error
})
.delete((req,res)=> { //crea la función para borrar un id
    Exercise.findByIdAndDelete(req.params.id)//Busca el id y si existe lo borra
        .then(()=>res.json("Exercise deted."))//Si fue borrado con éxito muestra el mensaje
        .catch(err => res.status(400).json("Error: " + err)); //Si no lo puede borrar muestra el error
});

router.route("/update/:id") //Crea una ruta para actualizar
.post((req,res)=> {
    Exercise.findById(req.params.id) //Busca el id en el database
    .then(exercise =>{
        exercise.username = req.body.username; //Actualiza los campos escritos en el <body>
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save() //Guarda los cambios en el Schema
            .then(()=> res.json("Exercise updated!"))//Si fue exitoso muestra el mensaje
            .catch(err => res.status(400).json("Error: " + err));//Si no pudo guardar manda el error
    })
    .catch(err => res.status(400).json("Error: " + err)); //manda error en caso de no encontrar el id
});

module.exports = router;

