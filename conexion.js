const mongoose = require('mongoose');

const usuario = "gaby_gv"
const password = "5vjZwwy82iwrNiA"
const dbname = "IoT"

const uri = `mongodb+srv://${usuario}:${password}@gabrielacloud.dlmuq.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('conectado a mongodb'))
    .catch(e => console.log('error de conexion', e))