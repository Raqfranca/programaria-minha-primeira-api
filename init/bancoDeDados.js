const mongoose = require('mongoose')

async function conectaBancoDeDados() {

    try{
        console.log('Conexão com o banco de dados iniciou')
    
        await mongoose.connect('mongodb+srv://raquelofranca:NLsw8rykrP2V9Ne3@mulheres.7mwq5iq.mongodb.net/?retryWrites=true&w=majority&appName=mulheres')
    
        console.log('Sua conexão com o banco de dado foi feita com sucesso')
    }catch (erro){
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados