const   mongoose=require('mongoose')
const Schema=mongoose.Schema;


const mascotaSchema=new Schema({
    nombre:String,
    edad:Number,
    descrip:String
})


//creamos el modelo
const Mascota = mongoose.model('Mascota',mascotaSchema)


module.exports=Mascota;