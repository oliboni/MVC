const express = require('express')
const router = express.Router()
const models = require('../models')
const bcrypt = require("bcrypt")
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

//Create
router.post('/', function (req, res) {
    let hash = bcrypt.hashSync(req.body.senha, 10)

    models.User.create({
        login: req.body.login,
        senha: hash
    }).then(
        user => res.status(200).send(user)
    ).catch(err => res.status(500).send(err))
})

//Get all
router.get('/', function(req, res) {
    models.User.findAll().then(
        users => res.status(200).send(users)
    )
})

//Find one by id
router.get('/:id', function(req, res) {
    models.User.findByPk(req.params.id)
        .then(user => {
            if (!user) {
                res.status(404).send("NOT FOUND")
            }

            res.status(200).send(user)
        }).catch(err => res.status(500).send(err))
})

//Update
router.put('/:id', function(req, res) {
    models.User.findByPk(req.params.id).then(user => {
        if (!user) {
            res.status(404).send("NOT FOUND")
        }

        user.update({
            login: req.body.login
        })
        res.status(200).send(user)
    })

})

//Delete
router.delete('/:id', function(req, res){
    models.User.destroy({
        where: {id: req.params.id}
    }).then(user => {
        res.status(200).send('Excluído com sucesso')
    })
})

module.exports = router