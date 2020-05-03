require("dotenv").config(); //Usa el archivo .env para guardar los keys o contraseñas

const express = require("express"); // agrega express
const cors = require("cors"); // agrega cors
const mongoose = require("mongoose"); // agrega mongoose para mongoDB

const app=express(); // usa express
const port = process.env.PORT||5000; //asigna el puerto de monunicación

app.use(cors()); //usa cors para abrir la comunicación entre servidores
app.use(express.json()); // le dice que vamos a enviar y recibir información en formato json

const uri = process.env.ATLAS_URI; // importa la uri del cluster de MongoDB Atlas que se encuentra en el .env
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true}); //establece la conexión con MongoDB Atlas
const connection = mongoose.connection; //mantiene la conexión abierta
connection.once("open", ()=> { // sí y solo sí la conexión está abierta
    console.log("MongoDB database connection established successfully"); //muestra que la conexión está funcionando en la consola
})

const exercisesRouter = require("./routes/exercises"); //Pide que cargue la ruta
const usersRouter = require("./routes/users");//Pide que cargue la ruta

app.use("/exercises", exercisesRouter); //Cuando alguien visita esa dirección carga exercisesRouter
app.use("/users", usersRouter); // Cuando alguien visita esa dirección carga usersRoute

app.listen(port,()=>{ //abre el puerto de comunicación
    console.log("Server is running on port: 5000"); // Manda el mensaje de que está escuchando
});