// imports
const prompt = require("prompt-sync")()

function exibeIdade() {
    try {
        let idade = Number(prompt("Qual sua idade? "))
        if (isNaN(idade)) {
            throw "Idade não é um número!"
        } else {
            console.log(`Sua idade é de ${idade} anos.`)
        }
    } catch (error) {    
        if (error instanceof TypeError) {
            console.log(e.name + ': ' + e.message)
        } else if (error instanceof RangeError) {
            console.log(e.name + ': ' + e.message)
        } else if (error instanceof SyntaxError) {
            console.log(e.name + ': ' + e.message)
        } else {
            throw error
        }
    }
}

exibeIdade()


