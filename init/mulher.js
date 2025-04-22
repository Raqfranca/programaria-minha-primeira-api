const express = require("express");
const { v4: uuidv4 } = require('uuid');
const router = express.Router()
const conectaBancoDeDados = require('./bancoDeDados')

const app = express();
app.use(express.json());
const porta=3333; 

conectaBancoDeDados()

function exibirMulher(request, response){
    response.json(
        {
            nome: 'Beyonce',
            imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.disney.com.br%2Fnovidades%2Fe-aniversario-da-beyonce-celebre-a-data-com-o-disney-plus&psig=AOvVaw35VFALkbiqZxIKmrFmzoI0&ust=1745327820700000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMj5nvia6YwDFQAAAAAdAAAAABAK',
            minibio: 'cantoura'
        }
    )
}

const mulheres = [
    {
        id: '1',
        nome: 'Beyonce',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.disney.com.br%2Fnovidades%2Fe-aniversario-da-beyonce-celebre-a-data-com-o-disney-plus&psig=AOvVaw35VFALkbiqZxIKmrFmzoI0&ust=1745327820700000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMj5nvia6YwDFQAAAAAdAAAAABAK',
        minibio: 'Cantoura'
    },

    {
        id: '2',
        nome: 'Lady Gaga',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fg1.globo.com%2Frj%2Frio-de-janeiro%2Fshow-da-lady-gaga%2Fnoticia%2F2025%2F04%2F19%2Flady-gaga-esta-no-topo-do-spotify-global-com-musica-mais-ouvida.ghtml&psig=AOvVaw1DB6peYZIzjml7JOLeee3u&ust=1745328525257000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIigmcqd6YwDFQAAAAAdAAAAABAE',
        minibio: 'Cantoura'
    },

    {
        id: '3',
        nome: 'Jorja Smith',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kpntrack.com%2F2021%2F03%2Fjorja-smith-lanca-addicted-seu-novo.html&psig=AOvVaw2yE821puXSRq53jmLgzXh7&ust=1745328605993000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNj1uf2d6YwDFQAAAAAdAAAAABAE',
        minibio: 'Cantoura'
    }
]


function exibirMulheres(request, response){
    response.json(mulheres)
}

function criarMulher(request, response) {

    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
    }
    
    mulheres.push(novaMulher)
    
    response.json(mulheres)
}

function corrrigirMulher(request, response){

    function encontrarMulher(mulher){
        if(mulher.id === request.params.id){
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontrarMulher)

    if(request.body.nome){
        console.log (request.body.nome)
        mulherEncontrada.nome = request.body.nome
    }


    if(request.body.imagem){
        mulherEncontrada.imagem = request.body.imagem
    }


    if(request.body.minibio){
        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres)
}

function deletarMulher(request, response){

    function todasMenosEla(mulher){
        if(mulher.id !== request.params.id){
            return mulher
        }
    }

    const mulheresQueFicaram = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicaram)
}

function informarPorta (){
    console.log("Servidor rodando na porta:" + porta)
}

//GET
app.use(router.get('/mulher', exibirMulher))
app.use(router.get('/mulheres', exibirMulheres))
//POST
app.use(router.post('/mulheres', criarMulher))
//PATCH 
app.use(router.patch('/mulheres/:id', corrrigirMulher))
//DELETE
app.use(router.delete('/mulheres/:id', deletarMulher))
app.listen(porta, informarPorta)