const express = require("express");

const router = express.Router()

const app = express();

function exibirOla(request, response){
    response.send('Olá mundo!')
}



const porta=3333; 

function informarPorta (){
    console.log("Servidor rodando na porta:" + porta)
}

informarPorta()

app.use(router.get('/ola', exibirOla))
app.listen(porta, informarPorta)