const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(resquest, response) {
    response.json({
        nome: 'Maria Carolina Frota',
        imagem: 'https://github.com/mcznh.png',
        minibio: 'Desenvolvedora de software'
    })
}

function mostrarPorta() {
    console.log("Servidor criado e rolando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostrarPorta)