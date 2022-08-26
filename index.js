const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Got a POST request.')
})

app.put('/user', (req, res) => {
    res.send('Got a POST request.')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
  })




app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}. Acesse: http://localhost:3000/`)
  })