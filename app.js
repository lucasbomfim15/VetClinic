const express = require("express");
const app = express();
const db = require('./db/connection')

const PORT = 3000;

app.use(express.json())

app.listen(PORT, () =>{
    console.log("API rodando")
})


//conexão com o banco de dados:

db.authenticate().then(() =>{
    console.log("CONECTOU COM O BANCO DE DADOS")
}).catch(err =>{
    console.log("ocorreu um erro ao conectar", err)
})



//rotas:


app.get('/teste', (req, res) =>{
    res.send("ola mundo")
})

app.post('/tutor', (req, res) =>{
   console.log(req.body)

   res.json({
    "statuscCode": 200
   })


})

