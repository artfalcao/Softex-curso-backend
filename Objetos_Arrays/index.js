let pessoa = {
    nome: "Arthur",
    idade: 26,
    altura: 1.86,
    peso: 81
}

let clientes = ["Pedro", "Vinícius", "Carol"]

function listaObj(obj) {
    console.log("Propriedades do Objeto:")
    for (let i in obj) {
        console.log(i)
    }
}

function listaArr(arr) {
    console.log("Elementos do Array: ")
    for (let i of arr) {
        console.log(i)
    }
}

listaObj(pessoa)
listaArr(clientes)