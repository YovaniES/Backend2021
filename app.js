const express = require('express');
const app = express();

const router=express.Router()

const mongoose = require('mongoose');


const URL = `mongodb+srv://Yovani_21:yosaes.21y@cluster0.fupbp.mongodb.net/AdminDB`
mongoose.connect(URL, (err, resp) => {
    if (err) {
        throw err;
    } else {
        console.log('BASE DE DATOS MONGO: \x1b[32m%s\x1b[0m', 'O N L I N E');
    }
})

//importamos lass rutas
//const appRoutes = require('./routes/app.routes')
const usuarioRoutes = require('./routes/usuario.routes')
//const mascotasRoutes=require('./routes//Mascota.routes')

//usamos las rutas
//router.render('/mascotas',mascotasRoutes);
app.use('/usuario', usuarioRoutes);
//app.use('/', appRoutes)



app.listen(5000, () => {
    console.log('E X P R E S S server escuchando en el puerto: \x1b[35m%s\x1b[0m', '5000 online');
});