const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');





router.get('/', async(req, res) => {
  try {
    const arrayMascotasDB = await Mascota.find();
    console.log(arrayMascotasDB);

    res.render("mascotas", {
      msj: 'se cargo la lista de mascotas',
      arrayMascotasDB: arrayMascotasDB,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
