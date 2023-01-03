//imports
const express = require ('express')
const app = express()


// Rotas
app.get('/', (req, res) => {
    res.send("Hello World")  
})


//Inicialização do Servidor
app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000!')
})
