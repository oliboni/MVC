const express = require('express'), router = express.Router(), models = require('../models'), bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

//Create
router.post('/', function (req, res) {
    models.Book.create(req.body).then(
        book => res.status(200).send(book)
    ).catch(erro => res.status(500).send(erro))
})

//Get All
router.get('/', function (req, res) {
    models.Book.findAll({include:
            {model: models.Author
            }}).then(
        book=> res.status(200).send(book)
    ).catch(erro => res.status(500).send(erro))
})

//Find one by id
router.get('/:id', function(req, res){
    models.Book.findByPk().then(
        book => {
            if(!book){
                res.status(404).send("404 NOT FOUND")
            }

            res.status(200).send(book)
        }
    ).catch(erro => res.status(500).send(erro))

})

//Update
router.put('/:id', function (req, res) {
    models.Book.findByPk(req.params.id).then(
        book => {
            if(!book)
                res.status(404).send("404 NOT FOUND")
            book.update(req.body)
            res.status(200).send(book)
        }
    ).catch(erro => res.status(500).send(erro))
})


//Delete
router.delete('/:id', function (req, res){
    models.Book.destroy({
        where: {id: req.params.id}
    }).then(
        book => {
            res.status(200).send('Excluido com sucesso')
        }
    )
})

module.exports = router