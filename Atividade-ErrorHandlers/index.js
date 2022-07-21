const prompt = require('prompt-sync')();

function calculaIdade() {
    while (true) {
        try {  
            let nome = prompt("Qual o seu nome completo? ");
            let anoNasc = Number(prompt("Qual o seu ano de nascimento? "));
    
            if (!anoNasc || anoNasc < 1922 || anoNasc > 2021) {
                return err;
            }
    
            let idade = 2022 - anoNasc;
            console.log(`Olá ${nome}, sua idade no ano de 2022 é de ${idade} ano(s).`)
            break;
        } catch(err) {
            err = "[ERRO] O ano de Nascimento deve conter um número entre 1922 e 2021!"
            console.log(err);
            continue;
        }
    }
    
} 

calculaIdade();
