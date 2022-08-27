const express = require("express")
const app = express()
const port = 3000

let users = [
    {id: 0, nome: "Arthur", idade: 26}
]

app.get('/', (req, res) => {
    
    res.send(users)
})

app.get('/:id', (req, res) => {
    const id = req.params.id

    res.status(200).send("Usuário: " + users[id].nome)
})



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}. Acesse:  http://localhost:3000/`)
  })