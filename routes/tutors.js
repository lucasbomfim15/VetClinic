const express = require('express');
const router = express.Router();
const Tutor = require('../models/Tutor');
const { UPDATE } = require('sequelize/lib/query-types');
const Pet = require('../models/Pet');


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
        
        const ListDados = await Tutor.findAll({include: { model: Pet, as: 'pets' }});

        res.json(ListDados);
    } catch (err) {
        
        res.status(500).json({ message: err.message });
    }
});

// atualiza um tutor 
router.put("/update/:id", async  (req, res) =>{
   

    try {
        const { id } = req.params; // Obtenha o ID do recurso a ser atualizado
        const { name, phone, email, date_of_birth, zip_code} = req.body; // Obtenha os novos dados do corpo da solicitação
    
        // Use o método findOne para encontrar o registro pelo ID
        const idtutor = await Tutor.findOne({ where: { id } });
    
        if (!idtutor) {
          return res.status(404).json({ message: 'id fornecido não foi encontrado' });
        }
    
        // atualiza os campos 
        idtutor.name = name;
        idtutor.phone = phone;
        idtutor.email = email;
        idtutor.date_of_birth = date_of_birth;
        idtutor.zip_code = zip_code;
        
    
        // salva no banco
        await idtutor.save();
    
        // Responde no postman com dados já atualizados
        return res.status(200).json(idtutor);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
      }
  
   

})



// deleta um tutor 

router.get('/delete/:id', async (req, res) =>{
    const id = req.params.id
  
   
    await Tutor.destroy({where: {id: id}}).then(function(){
        res.status(202).json("Tutor deletada com sucesso")
       
    }).catch(function (err){
        res.status(404).json("ESTA POSTAGEM NAO EXISTE")
    })
   
   
})

module.exports = router
