const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');
const { UPDATE } = require('sequelize/lib/query-types');


//testando rota
router.get("/teste", (req, res) =>{
    res.send("deu certo")
})

//insere um pet à um tutor

router.post("/pet/:tutorId", (req, res) =>{
    let{id, name, species, carry, weight, date_of_birth} = req.body;
    const { tutorId } = req.params;

    //inserindo 

    Pet.create( {
        id,
        tutorId,
        name,
        species,
        carry,
        weight,
        date_of_birth   
    }).then(() => res.redirect('/'))
    .catch((err => console.log(err)))
})


//visualiza os pets inseridos

router.get("/viewpet", async (req, res) =>{
    try{
        const listarPets = await Pet.findAll();

        res.json(listarPets)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: err.message })
    }
})


//deleta um pet de um tutor//

router.get('/pet/:id/tutor/:tutorId', async (req, res) =>{
    const id = req.params.id
    const tutorId = req.params.tutorId

    await Pet.destroy({where: {id: id}}).then(function(){
        res.status(202).json("Pet deletado com sucesso")
       
    }).catch(function (err){
        res.status(404).json("ESTA POSTAGEM NAO EXISTE")
    })

})


//atualiza a informação de um pet

router.put("/pet/:id/tutor/:tutorId", async(req, res) =>{
    try {
        const { id } = req.params; // Obtenha o ID do recurso a ser atualizado
        const { name, species, carry, weight, date_of_birth} = req.body; // Obtenha os novos dados do corpo da solicitação
    
        // Usa o método findOne para encontrar o registro pelo ID
        const idpet = await Pet.findOne({ where: { id } });
    
        if (!idpet) {
          return res.status(404).json({ message: 'id fornecido não foi encontrado' });
        }
    
        // atualiza os campos 
        idpet.name = name;
        idpet.species = species;
        idpet.carry = carry;
        idpet.weight = weight;
        idpet.date_of_birth = date_of_birth;
        
        
    
        // salva no banco
        await idpet.save();
    
        // Responde no postman com dados já atualizados
        return res.status(200).json(idpet);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
      }
})




module.exports = router