const express = require("express");
const router = express.Router()
const conectaBancoDeDados = require('./bancoDeDados')
const Mulher = require('./diva-model')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())
const porta=3333; 

conectaBancoDeDados()

async function exibirMulheres(request, response){
    try{
        const mulheresVindasDoBancoDados = await

        Mulher.find()

        response.json(mulheresVindasDoBancoDados)

    }catch(err){
        console.log(err)

    }
}

async function criarMulher(request, response) {
    
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try{
       const mulherCriada = await novaMulher.save()
       response.status(201).json(mulherCriada)
    }catch(err){
        console.log( 'Erro ao criar a mulher' + err)

    }
}

async function corrrigirMulher(request, response){
    try{

        const mulherEncontrada = await Mulher.findById(request.params.id)

        if(request.body.nome){
            mulherEncontrada.nome = request.body.nome
        }
    
    
        if(request.body.imagem){
            mulherEncontrada.imagem = request.body.imagem
        }
    
    
        if(request.body.minibio){
            mulherEncontrada.minibio = request.body.minibio
        }

        if(request.body.citacao){
            mulherEncontrada.citacao = request.body.citacao
        }

        const mulherAtualizadaNoBancodeDados = await mulherEncontrada.save()

        response.json(mulherAtualizadaNoBancodeDados)

    }catch(err){
        console.log( "Erro ao corrigir a mulher"+ err)
    }

}

async function deletarMulher(request, response){
    try{
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({ messagem: 'Mulher deletada com sucesso!' })
    }catch(err){
        console.log( "Erro deletar uma mulher"+ err)
    }
}

function informarPorta (){
    console.log("Servidor rodando na porta:" + porta)
}

//GET
app.use(router.get('/mulheres', exibirMulheres))
//POST
app.use(router.post('/mulheres', criarMulher))
//PATCH 
app.use(router.patch('/mulheres/:id', corrrigirMulher))
//DELETE
app.use(router.delete('/mulheres/:id', deletarMulher))
app.listen(porta, informarPorta)