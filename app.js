const express = require("express");
const app = express();
const db = require('./db/connection')
const bodyParser = require("body-parser");
require('dotenv').config()


const Pet = require('./models/Pet')
const Tutor = require("./models/Tutor")

Pet.associate({Tutor});Tutor.associate({Pet});




app.use(express.json())

app.listen(process.env.PORT, () =>{
    console.log("API rodando")
})

// body parser
app.use(bodyParser.urlencoded({extended: false}))


//conexão com o banco de dados:
//pets.tutorId not exist

db.authenticate().then(() =>{
    console.log("CONECTOU COM O BANCO DE DADOS")
}).catch(err =>{
    console.log("ocorreu um erro ao conectar", err)
})



//rotas:


app.get('/', (req, res) =>{
    res.send("ola mundo")
})



//tutores routes

app.use('/tutors', require('./routes/tutors'));


//pets routes

app.use('/pets', require('./routes/pets'));