//Importando Dependência
const prompt = require("prompt-sync")();

//Declarando variáveis globais
let operation;

//Declarando Função Calculadora
function Calculadora(num1, num2, operation) {
    if (operation == 1) {
        return num1 + num2;
    } else if (operation == 2) {
        return num1 - num2;
    } else if (operation == 3) {
        return num1 * num2;
    } else if (operation == 4) {
        return num1 / num2;
    } 
}

//Script Principal
do {
    console.log("Lista de Operações:\n1 : Soma\n2 : Subtração\n3 : Multiplicação\n4 : Divisão\n0 : Sair");
    
    operation = Number(prompt("Digite o número para a opção correspondente: "));
    
    while (operation != 0 && operation != 1 && operation != 2 && operation != 3 && operation != 4) {
        console.log("Essa opção não existe.");

        console.log("Lista de Operações:\n1 : Soma\n2 : Subtração\n3 : Multiplicação\n4 : Divisão\n0 : Sair");
    
        operation = prompt("Digite o número para a opção correspondente: ");
    }
    if (operation == 1 || operation == 2 || operation == 3 || operation == 4) {
        //Recebendo Inputs
        let num1 = Number(prompt("Qual o 1º número? "));
        let num2 = Number(prompt("Qual o 2º número? "));

        let result = Calculadora(num1, num2, operation);

        console.log(result)
    }
    
} while (operation == 1 || operation == 2 || operation == 3 || operation == 4)


