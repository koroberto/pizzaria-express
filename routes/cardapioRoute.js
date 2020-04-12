const express = require('express')
const cardapioController = require('../controllers/cardapioController');
const multer = require('multer')

let route = express.Router()
//rotas a partir daqui!

route.get('/cadastrar/:pizza/:preco', (req, res)=>{
    res.send("Cadastrou pizza com sucesso!")
})
//read
route.get('/ver', cardapioController.listarCardapio)
//cadastro get e post
route.get("/cadastro", cardapioController.formCadastro)
route.post('/cadastro', cardapioController.salvarCadastro)
//delete
route.delete('/deletar/:posicao', cardapioController.deletarPizza)
//update
route.get('/alterar/:posicao', cardapioController.formAlteracao )
//route.put('/alterar/:posicao')
route.put('/alterar', cardapioController.alterarPizza)

module.exports = route