const router = require("express").Router(); //Necesitamos el router de express para crear la ruta
let User = require("../models/user.model"); // Requerimos el modelo de Mongoose

router.route("/") // Creamos nuestra ruta home
.get((req, res)=>{  //Manda información al front end
    User.find() //Busca un dato en la database
    .then(users=> res.json(users)) //Envía los usuarios encontrados en la database
    .catch(err=> res.status(400).json("Error: " + err)); // Si no encuentra nada manda el error
});

router.route("/add") //Crea la ruta add
.post((req,res)=>{ //Escucha y recibe información del front end
    const username = req.body.username; //Lee la información del html <body> con nombre username
    const newUser = new User({username}); //Guarda la información recibida de username en el schema User

    newUser.save() //Manda la información a la database
        .then(()=> res.json("user added!")) //Si es exitoso manda el mensaje 
        .catch(err=> res.status(400).json("Error: " + err)); //Si no es exitoso manda el error
});

module.exports=router; //Exporta la ruta para ser usada