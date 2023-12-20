const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraOla(resquest, response) {
    response.send("Olá, mundo!")
}

function mostrarPorta() {
    console.log("Servidor criado e rolando na porta ", porta)
}

app.use(router.get('/ola', mostraOla))
app.listen(porta, mostrarPorta)