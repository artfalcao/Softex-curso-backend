/*Nessa escola, há quatro turmas (A, B, C e D) com vinte e cinco alunos cada.

Elabore um algoritmo que solicite o nome e a nota do vestibular aos alunos. Depois, informe quantos deles foram aprovados, de que turma são, qual a maior nota em cada turma e qual aluno teve a maior nota de todas.

Para que o aluno seja aprovado no vestibular, ele deverá obter nota maior ou igual a 7.

ATENÇÃO: As notas por turma não podem se repetir.
*/
ALGORITMO
  //Declarando Variáveis
  nome caractere;
  nota real;
  contador, numAprovados1, numAprovados2, numAprovados3, numAprovados4, numTotalAprovados maiorNota1, maiorNota2, maiorNota3, maiorNota4, maiorNotaGeral, turma, i inteiro;
  //Definindo valores iniciais
  numAprovados1 <- 0;
  numAprovados2 <- 0;
  numAprovados3 <- 0;
  numAprovados4 <- 0;
  maiorNota1 <- 0;
  maiorNota2 <- 0;
  maiorNota3 <- 0;
  maiorNota4 <- 0;
  i <- 0;

INICIO
  //Número total de alunos = 100
  ENQUANTO ( i < 100 ) FACA
    escreva("De qual turma você é? Digite: 1 -TurmaA ou 2-TurmaB ou 3-TurmaC ou 4-TurmaD");
    leia (turma)
    SE (turma = 1) ENTAO
      //Receber Dados da Turma A
      escreva("Qual o seu nome?");
      leia (nome);
      escreva("Qual a sua nota?");
      leia (nota);
      //Para calcular o número de aprovados na turma A
      SE (nota >= 7) ENTAO numAprovados1 <- numAprovados1 + 1 FIMSE;
      //Para saber a maior nota da Turma A
      SE (nota > maiorNota1) ENTAO maiorNota1 <- nota FIMSE;
    

    SENAO (turma = 2) ENTAO
      //Receber Dados da Turma B
      escreva("Qual o seu nome?");
      leia (nome);
      escreva("Qual a sua nota?");
      leia (nota);
      //Para calcular o número de aprovados na turma B
      SE (nota >= 7) ENTAO numAprovados2 <- numAprovados2 + 1 FIMSE;
      //Para saber a maior nota da Turma B
      SE (nota > maiorNota2) ENTAO maiorNota2 <- nota FIMSE;
      

    SENAO (turma = 3) ENTAO
      //Receber Dados da Turma C
      escreva("Qual o seu nome?");
      leia (nome);
      escreva("Qual a sua nota?");
      leia (nota);
      //Para calcular o número de aprovados na turma C
      SE (nota >= 7) ENTAO numAprovados3 <- numAprovados3 + 1 FIMSE;
      //Para saber a maior nota da Turma C
      SE (nota > maiorNota3) ENTAO maiorNota3 <- nota FIMSE;
      
    
    SENAO (turma = 4) ENTAO
      //Receber Dados da Turma D
      escreva("Qual o seu nome?");
      leia (nome);
      escreva("Qual a sua nota?");
      leia (nota);
      //Para calcular o número de aprovados na turma D
      SE (nota >= 7) ENTAO numAprovados4 <- numAprovados4 + 1 FIMSE;
      //Para saber a maior nota da Turma D
      SE (nota > maiorNota4) ENTAO maiorNota4 <- nota FIMSE;
      
    FIMSE

    i <- i + 1;
  FIMENQUANTO
    
  //Cálculo do número total de aprovados
  numTotalAprovados <- numAprovados1 + numAprovados2 + numAprovados3 + numAprovados4;

  //Cálculo da maior nota de todas
  SE (maiorNota4 > maiorNota3) ENTAO
    maiorNotaGeral <- maiorNota4;
  SENAO (maiorNota3 > maiorNota2)
    maiorNotaGeral <- maiorNota3;
  SENAO (maiorNota2 > maiorNota1)
    maiorNotaGeral <- maiorNota2;
  SENAO maiorNotaGeral <- maiorNota1;
  FIMSE

  //Exibir Resultados:
  escreva("O número de aprovados da turma A foram:", numAprovados1);
  escreva("A maior nota da Turma A foi:", maiorNota1);
  escreva("O número de aprovados da turma B foram:", numAprovados2);
  escreva("A maior nota da Turma B foi:", maiorNota2);
  escreva("O número de aprovados da turma C foram:", numAprovados3);
  escreva("A maior nota da Turma C foi:", maiorNota3);
  escreva("O número de aprovados da turma D foram:", numAprovados4);
  escreva("A maior nota da Turma D foi:", maiorNota4);
  escreva("O número total de aprovados foram:", numTotalAprovados);
  escreva("A maior nota de todas foi:", maiorNotaGeral);

FIM
