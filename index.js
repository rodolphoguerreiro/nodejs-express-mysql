const init = require('./config/init')

try {
    const app = init()

    app.listen(3000, () => console.log("servidor rodando na porta 3000"))

} catch (error) {
    console.error('Error:', error);
}