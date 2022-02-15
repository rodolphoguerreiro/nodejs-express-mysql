const User = require('../models/UserModel')

module.exports = app => {

    app.get('/users', (req, res) => {
        const users = User.findAll().then(users => {
            res.status(200).send(users)
        }).catch(error => res.status(400).send(error))
    })

    app.post('/user/add', (req, res) => {
        User.create({ name: "Janeon" })
        .then(user => {
            res.status(201).send(user)
        }).catch(error => res.status(400).send(error))
    })

}