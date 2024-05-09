const express = require("express");
const app = express();
const db = require('./db/connection')
const bodyParser = require("body-parser");

const PORT = 3000;

app.use(express.json())

app.listen(PORT, () =>{
    console.log("API rodando")
})

// body parser
app.use(bodyParser.urlencoded({extended: false}))


//conexão com o banco de dados:

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