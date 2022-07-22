const prompt = require('prompt-sync')();

let seuVoto;
let vencedor;
let finaliza;

//Definindo quantidade de votos que cada canditado possui
let votosX = 312;
let votosY = 605;
let votosZ = 208;
let votosBrancos = 75;
let votosNulos = 30;

//Definindo o número de eleição de cada candidato e do voto em branco
const candidatoX = 889;
const candidatoY = 847;
const candidatoZ = 515;
const branco = 0;

//Definindo tipos de erros
const err = {
    "Erro_numero": "[ERRO] Por favor, insira o NÚMERO do seu candidato.",
    "Warning_candidato": "[ATENÇÃO] O número digitado não corresponde ao de nenhum candidato. Seu voto será computado como voto NULO."
}

do {
    do{
        console.log(`Números de Eleição dos Candidatos:\nX : ${candidatoX}\nY : ${candidatoY}\nZ : ${candidatoZ}\nVoto em Branco: 0\n`);
    seuVoto = Number(prompt("Digite o número do candidato que você deseja votar: "));

        if(Number.isNaN(seuVoto)) {
            console.log(err.Erro_numero)
        }
    } while(Number.isNaN(seuVoto))
    

    finaliza = Number(prompt("Você deseja finalizar a sua votação? Digite:\n1 - SIM\n2 - NÃO\n"));
} while(finaliza == 2)

//Computando o voto
if (seuVoto == candidatoX) {
    votosX++;
} else if (seuVoto == candidatoY) {
    votosY++;
} else if (seuVoto == candidatoZ) {
    votosZ++;
} else if (seuVoto == branco) {
    votosBrancos++;
    votosNulos++;       
} else {
    console.log(err.Warning_candidato);
}

// Computando votos para saber o candidato vencedor    
if (votosX > votosY) {
    if (votosX > votosZ)
        vencedor = "Candidato X"
} else if (votosY > votosX) {
    if (votosY > votosZ) {
        vencedor = "Candidato Y"
    }
} else {
    vencedor = "Candidato Z"
}

//Imprimindo Resultados
console.log("Votação Finalizada!");
console.log(`Candidato Vencedor: ${vencedor}`);
console.log(`Número de Votos de cada Candidato:\nCandidato X : ${votosX}\nCandidato Y : ${votosY}\nCandidato Z : ${votosZ}\nBrancos : ${votosBrancos}\nNulos: ${votosNulos}`)


