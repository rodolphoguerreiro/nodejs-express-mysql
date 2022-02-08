const _express = require('./config/_express')

const app = _express()

app.listen(3000, () => console.log("servidor rodando na porta 3000"))