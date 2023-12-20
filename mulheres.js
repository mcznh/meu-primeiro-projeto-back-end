const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Maria Carolina Frota',
        imagem: 'https://github.com/mcznh.png',
        minibio: 'Desenvolvedora de software'
    },
    {
        nome: 'Simara Conceição',    
        imagem: 'https://bit.ly/3LJIyOF',    
        minibio: 'Desenvolvedora e instrutora',     
    },    
    {     
        nome: 'Iana Chan',     
        imagem: 'https://bit.ly/3JCXBqP',     
        minibio: 'CEO & Founder da PrograMaria',     
    },     
    {     
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer',     
    }
]

function mostraMulheres(resquest, response) {
    response.json(mulheres)
}

function mostrarPorta() {
    console.log("Servidor criado e rolando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostrarPorta)