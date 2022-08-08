const prompt = require('prompt-sync')()

let num1 = Number(prompt("Digite o 1º número: "))
let num2 =  Number(prompt("Digite o 2º número: "))
let op = prompt(" Qual Resultado você deseja realizar?\nDigite:\n+ : Soma\n- : Subtração\n* : Multiplicação\n/ : Divisão\n** : Potência\n")
let result

if (op == '+') {
    result = num1 + num2
    console.log('Resultado: ' + result)
} else if (op == '-') {
    result = num1 - num2
    console.log('Resultado: ' + result)
} else if (op == '*') {
    result = num1 * num2
    console.log('Resultado: ' + result)
} else if (op == '/') {
    if (num2 == 0) {
        console.log('Não é possível realizar divisões por zero.')
    } else {
        result = parseInt(num1 / num2)
        let resto = num1 % num2
        console.log('Resultado: ' + result)
        console.log('Resto: ' + resto)
    }
} else if (op == '**') {
    result = num1 ** num2
    console.log('Resultado: ' + result)
}


