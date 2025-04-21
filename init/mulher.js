const express = require("express");

const router = express.Router()

const app = express();

function exibirMulher(request, response){
    response.json(
        {
            nome: 'Beyonce',
            imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.disney.com.br%2Fnovidades%2Fe-aniversario-da-beyonce-celebre-a-data-com-o-disney-plus&psig=AOvVaw35VFALkbiqZxIKmrFmzoI0&ust=1745327820700000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMj5nvia6YwDFQAAAAAdAAAAABAK',
            bio: 'cantoura'
        }
    )
}

const mulheres = [
    {
        nome: 'Beyonce',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.disney.com.br%2Fnovidades%2Fe-aniversario-da-beyonce-celebre-a-data-com-o-disney-plus&psig=AOvVaw35VFALkbiqZxIKmrFmzoI0&ust=1745327820700000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMj5nvia6YwDFQAAAAAdAAAAABAK',
        bio: 'Cantoura'
    },

    {
        nome: 'Lady Gaga',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fg1.globo.com%2Frj%2Frio-de-janeiro%2Fshow-da-lady-gaga%2Fnoticia%2F2025%2F04%2F19%2Flady-gaga-esta-no-topo-do-spotify-global-com-musica-mais-ouvida.ghtml&psig=AOvVaw1DB6peYZIzjml7JOLeee3u&ust=1745328525257000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIigmcqd6YwDFQAAAAAdAAAAABAE',
        bio: 'Cantoura'
    },

    {
        nome: 'Jorja Smith',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kpntrack.com%2F2021%2F03%2Fjorja-smith-lanca-addicted-seu-novo.html&psig=AOvVaw2yE821puXSRq53jmLgzXh7&ust=1745328605993000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNj1uf2d6YwDFQAAAAAdAAAAABAE',
        bio: 'Cantoura'
    }
]


function exibirMulheres(request, response){
    response.json(mulheres)
}

const porta=3333; 

function informarPorta (){
    console.log("Servidor rodando na porta:" + porta)
}

app.use(router.get('/mulher', exibirMulher))
app.use(router.get('/mulheres', exibirMulheres))
app.listen(porta, informarPorta)