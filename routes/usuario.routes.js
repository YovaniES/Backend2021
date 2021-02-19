const express = require('express');
//const app = express();

const router=express.Router()

/* Importamos al modelo USUARIO */
const Usuario = require('../models/cliente');
//const router = require('./Mascota.routes');


router.get('/', (req, res) => {

    Usuario.find({}, (err, usuarios) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'ERROR, Cargando los usuarios!',
                error: err
            });
        }

        res.status(200).json({
            ok: true,
            mensaje: 'Los usuarios son ...',
            usuarioL: usuarios
        });
    });
});


module.exports = router;