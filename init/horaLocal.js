const express = require("express")

const router = express.Router()
const app = express();

function mostraHora(request, response) {
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
   
    response.send(hora)   
}

const porta=3333; 

function informarPorta (){
    console.log("Servidor rodando na porta:" + porta)
}

app.use(router.get('/hora', mostraHora))
app.listen(porta, informarPorta)