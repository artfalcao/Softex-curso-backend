const prompt = require("prompt-sync")();

const num1 = Number(prompt("Qual o 1º número? "));
const num2 = Number(prompt("Qual o 2º número? "));
const operation = prompt("Qual a operação que você deseja realizar?\nDigite: 1 - Soma | 2 - Subtração | 3 - Multiplicação | 4 - Divisão\n");

function Calculadora(num1, num2, operation) {
    let result;

    if (operation == 1) {
        result =  num1 + num2;
    } else if (operation == 2) {
        result = num1 - num2;
    } else if (operation == 3) {
        result = num1 * num2;
    } else if (operation == 4) {
        result = num1 / num2;
    } else if ( operation != 1 || operation != 2 || operation != 3 || operation != 4) {
        result = 0;
    }

    return console.log(result)
}

Calculadora(num1, num2, operation);