const express = require('express')

const app = express();

//rutas
app.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        mensaje: 'GET app correcto en APP'
    })
})



module.exports = app;