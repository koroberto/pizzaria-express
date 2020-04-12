const fs = require('fs')
const path = require('path')

path.join('controller', 'indexController.js')
//return == controller/indexController.js 
//Retorna Caminho

path.extname('controller', 'indexController.js')
//js
//Retorna Extensão

//let conteudo = fs.readFileSync('texto.txt', {encoding:'utf-8'})
let conteudoJson = fs.readFileSync('texto.json', {encoding:'utf-8'})
conteudoJson = JSON.parse(conteudoJson)

conteudoJson.push('Olá')

fs.writeFileSync('texto.json', JSON.stringify(conteudoJson))

//console.log(conteudo)
//console.log(JSON.parse(conteudoJson))
