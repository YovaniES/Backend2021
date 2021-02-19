const { Schema, model, Mongoose } = require('mongoose');

const ClienteSchema = Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, unique: true, required: [true, 'El email es necesario'] },
    password: { type: String, required: [true, 'La contraseña es obligatoria'] },

});



module.exports = model('Cliente', ClienteSchema);