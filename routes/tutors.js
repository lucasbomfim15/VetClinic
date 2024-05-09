const express = require('express');
const router = express.Router();
const Tutor = require('../models/Tutor');
const { UPDATE } = require('sequelize/lib/query-types');

//teste 

router.get('/teste', (req, res) =>{
    res.send("deu certo")
})


//insere tutores

router.post('/add', (req, res) => {

    let{name, phone, email, date_of_birth, zip_code} = req.body;

    //inserindo 

    Tutor.create( {
        name,
        phone,
        email,
        date_of_birth,
        zip_code   
    }).then(() => res.redirect('/'))
    .catch((err => console.log(err)))


})


//lista tutores

router.get('/view', async (req, res) => {
    try {
        
        const ListDados = await Tutor.findAll();

        res.json(ListDados);
    } catch (err) {
        
        res.status(500).json({ message: err.message });
    }
});

// atualiza um tutor OBS AINDA PRECISO TERMINAR
router.put("/update/:id", async  (req, res) =>{
    const id = req.params.id;
    const { name, phone, email, date_of_birth, zip_code } = req.body;

  
   

})



// deleta um tutor 

router.get('/delete/:id', async (req, res) =>{
    const id = req.params.id
  
   
    await Tutor.destroy({where: {id: id}}).then(function(){
        res.json("Tutor deletada com sucesso")
       
    }).catch(function (err){
        res.json("ESTA POSTAGEM NAO EXISTE")
    })
   
   
})

module.exports = router
