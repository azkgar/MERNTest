const mongoose = require("mongoose"); //Requiere mongoose

const Schema = mongoose.Schema; //manda a llamar la función Schema

const exerciseSchema = new Schema({ // Crea un nuevo Schema para los ejercicios
    username: {type: String, required: true}, //Asigna los campos de entrada y sus características
    description: {type: String, required:true},
    duration: {type:Number, required: true},
    date: {type:Date, required: true},
}, {
    timestamps: true, //Pide que guarde la fecha y hora de modificación
});

const Exercise = mongoose.model("Exercise",exerciseSchema); // Hace que el modelo esté listo para mandar a llamarlo

module.exports = Exercise; //Exporta el schema para ser usado en otros archivos