//node_modules/.bin/sequelize model:genegare
// --nome Author --attributes first_name:string.last_name:string é como criarmos alguns arquivos como models migrations
var express = require('express')
var app = express()
require("dotenv-safe").load()
var AuthorsControllers = require("./app/Controllers/AuthorsControllers")
var BookControllers = require("./app/Controllers/BookControllers")
var UsersControllers = require("./app/Controllers/UsersControllers")

/*app.get('/', function(req,res) {
    res.send('Hello World!')
})

app.get('/teste', function(req, res){
    res.status(200).send('Página Teste')
})

app.listen(3000, function() {
    console.log("Servidor ouvindo na porta 3000!")
})*/

app.use("/authors", AuthorsControllers)
app.use("/book", BookControllers)
app.use("/users", UsersControllers)
app.listen(3000, function(){
    console.log("Server ouvindo na porta 3000!")
})