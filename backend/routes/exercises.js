const router = require("express").Router(); //Crea la ruta
let Exercise = require("../models/exercise.model"); // Requiere el modelo

router.route("/") //Crea la ruta home
.get((req,res)=>{ // Manda la información
    Exercise.find() //Busca en la database
        .then(exercises => res.json(exercises)) //Muestra lo que encontró en json
        .catch(err => res.status(400).json ("Error: " + err)); //Si no encuentra manda error
});

router.route("/add") //Crea la ruta add
.post((req,res)=>{ //Recibe información
    const username = req.body.username; //Leé la información en el <body> con el nombre despues de req.body.
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise ({ //Crea un nuevo Schema con la información obtenida del <body>
        username,
        description,
        duration,
        date,
    });
    
    newExercise.save() //Guarda la información nueva en el database
        .then(()=> res.json("Exercise added!")) //Si lo guarda manda el mensaje
        .catch(err=> res.status(400).json("Error: " + err)); //Si no lo guarda manda el error 
});

module.exports = router;

