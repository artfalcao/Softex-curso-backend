# Inclua a coluna DATA_NASCIMENTO na tabela ALUNO do tipo string e de tamanho 10 caracteres
ALTER TABLE ALUNO ADD DATA_NASCIMENTO VARCHAR(10);

# Altere a coluna TELEFONE para CONTATO e seu tipo de dado para string
ALTER TABLE ALUNO
CHANGE TELEFONE CONTATO VARCHAR(13);

# Inclua o campo ISBN na tabela LIVRO, com tamanho de 13 caracteres do tipo inteiro
ALTER TABLE LIVRO ADD ISBN INT(13);

# Remova o campo ISBN da tabela LIVRO
ALTER TABLE LIVRO DROP COLUMN ISBN;
