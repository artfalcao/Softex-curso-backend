//imports
const express = require ('express')
const app = express()


//Configurações de Rotas
app.get('/', (req, res) => {
    res.send("REQUISICAO HTTP DO TIPO GET")  
})

app.post('/', (req, res) => {
    res.send("REQUISICAO HTTP DO TIPO POST")  
})

app.put('/', (req, res) => {
    res.send("REQUISICAO HTTP DO TIPO PUT")  
})

app.delete('/', (req, res) => {
    res.send("REQUISICAO HTTP DO TIPO DELETE")  
})


//Inicialização do Servidor
app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000!')
})
