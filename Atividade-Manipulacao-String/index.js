//imports
const prompt = require("prompt-sync")()

// Função para perguntar o nome do usuário
function perguntaNome() {
    let nome = prompt("Qual seu nome? ")
    return nome
}

// Função que exibe o número de letras do Nome
function tamanhoNome() {
    tamanho = pergunta.length
    console.log(`Seu nome possui ${tamanho} letras.`)
    return tamanho
}

// Função que procura a letra "a" no nome
function contem_A() {
    nome_upper = pergunta.toUpperCase()
    contemA = nome_upper.includes("A")
    contemA == true ? console.log("Seu nome possui a letra A.") : console.log("Seu nome não possui a letra A.")
    
}

// Função que exibe a primeira letra do nome
function primeiraLetra() {
    const primeiraPosicao = -tamanho_Nome + 1
    const primeiraLetraNome = pergunta.slice(0, primeiraPosicao)
    console.log(`A primeira letra do seu nome é a letra ${primeiraLetraNome}.`)
}

//Chamada das Funções
const pergunta = perguntaNome()
const tamanho_Nome = tamanhoNome()
contem_A()
primeiraLetra()


