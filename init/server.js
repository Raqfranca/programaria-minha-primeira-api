const express = require("express");

const app = express();

const porta=3333; 

function informarPorta (){
    console.log("Servidor rodando na porta:" + porta)
}

informarPorta()

app.listen(porta, informarPorta)