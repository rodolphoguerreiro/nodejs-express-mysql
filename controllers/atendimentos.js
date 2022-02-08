module.exports = app => {

    app.get('/atendimentos', (req, res) => res.send('Request GET'))

    app.post('/atendimentos', (req, res) => {

        console.log(req.body)

        res.send('Request POST')
    })

}