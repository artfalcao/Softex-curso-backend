#Importando pandas para consultar arquivos
import pandas as pd

#Acessando o conteúdo do arquivo notas_alunos.csv
df = pd.read_csv("notas_alunos.csv")

#Cálculo da média de todas as linhas
media = (df["nota_1"] + df["nota_2"]) / 2

#Criar uma nova coluna chamada "média" com os valores calculados
df["media"] = media

#Criar coluna situação e inserir valores
if (media >= 7) :
    situacao = "APROVADO"
    df["situacao"] = situacao
elif (media < 7 or df["faltas"] > 5) :
    situacao = "REPROVADO"
    df["situacao"] = situacao

#Salvar alterações criando um novo documento "aluno_situacao.csv"
df.to_csv("./alunos_situacao.csv")
