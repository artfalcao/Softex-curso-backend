CREATE DATABASE SOFTEX_CLASS;
USE SOFTEX_CLASS;

CREATE TABLE AUTORES (
	ID_AUTOR INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  NOME VARCHAR(60) NOT NULL,
  TELEFONE VARCHAR(10) NOT NULL
);

CREATE TABLE LIVROS (
	  ID_LIVRO INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    TITULO VARCHAR(60) NOT NULL,
    AUTOR INT NOT NULL,
    FOREIGN KEY (AUTOR) REFERENCES ID_AUTOR(AUTORES)
);

DESC AUTORES;
DESC LIVROS;

-- Autores com livros cadastrados
INSERT INTO AUTORES (NOME, TELEFONE) VALUES 
("William Shakespeare", 98787-0909),
("Jane Austen", 98877-9988),
("Edgar Allan Poe", 97766-2211),
("Machado de Assis", 93344-5566);

-- Autores sem livros cadastrados
INSERT INTO AUTORES (NOME, TELEFONE) VALUES 
("Mario Vargas Llosa", 98787-8787),
("Tomas Sowell", 98877-9900);

INSERT INTO LIVROS (TITULO, AUTOR) VALUES
("Romeu e Julieta", 1),
("Sonho de uma noite de verão", 1),
("Trabalhos de amores perdidos", 1),
("Razão e sensibilidade", 2),
("Orgulho e preconceito", 2),
("A Queda da Casa de Usher", 3),
("William Wilson", 3),
("Memórias Póstumas de Brás Cubas", 4),
("Dom Casmurro", 4),
("Quincas Borba", 4),
("A Mão e a Luva", 4);

SELECT * FROM AUTORES;
SELECT * FROM LIVROS;

-- INNER JOIN - Seleciona apenas os livros que possuem autores
SELECT A.NOME, L.TITULO 
FROM AUTORES A INNER JOIN LIVROS L
ON A.ID_AUTOR = L.AUTOR;

-- LEFT JOIN - Seleciona todos os autores, tenham eles livros cadastrados ou não 
SELECT A.NOME, L.TITULO 
FROM AUTORES A LEFT JOIN LIVROS L
ON A.ID_AUTOR = L.AUTOR;

-- RIGHT JOIN - Seleciona todos os livros cadastrados. Como um livro não pode ser cadastrado sem autor a resposta é a mesma do inner join
SELECT A.NOME, L.TITULO 
FROM AUTORES A RIGHT JOIN LIVROS L
ON A.ID_AUTOR = L.AUTOR;

-- CROSS JOIN - Retorna todas as possíveis ligações entre autores e livros
SELECT AUTORES.NOME, LIVROS.TITULO 
FROM AUTORES CROSS JOIN LIVROS;
