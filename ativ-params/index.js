const express = require('express')
const params = require('params')
const app = express()

app.get("/:id", (req, res) => {
    const id = req.params.id
    if (id == "50") {
        res.status(200).send(`ID: ${id}`)
    } else if (id == "30"){
        res.status(200).send(`ID: ${id}`)
    } else {
        res.status(404).send("Note Found")
    }
})




app.listen(3000, () => console.log("Aplicação rodando na porta 3000."))