import { Schema } from "mongoose"; // Manda a llamar mongoose

const userSchema = new Schema({ //Crea un nuevo schema
    username: { //Agrega los campos requeridos y sus características
        type: String, 
        required: true,
        unique: true,
        trim: true,
        minlenght: 3
    },
},{
    timestamps: true, // Guarda la fecha y tiempo de modificación
});

const User = mongoose.model("User", userSchema); // Hace que el Schema esté listo para ser mandado a llamar para agregar nueva info

module.exports = User; //Exporta el schema