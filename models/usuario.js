const { Schema, model } = require('mongoose')

const UsuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, unique: true, required: [true, 'El correo es necesario'] },
    password: { type: String, required: [true, 'La contraseña es necesaro'] },
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'USER_ROLE' },
    apell: {type:String, required:true}
});





module.exports = model('Usuario', UsuarioSchema);