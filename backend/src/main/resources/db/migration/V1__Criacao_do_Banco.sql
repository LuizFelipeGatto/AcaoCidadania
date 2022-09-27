CREATE SCHEMA IF NOT EXISTS sistema;

CREATE TABLE IF NOT EXISTS sistema.unidade (
    id INT NOT NULL,
    nome varchar(70) NOT NULL,
    cidade varchar(70) NOT NULL,
    logradouro varchar(70) NOT NULL,

    CONSTRAINT pk_unidade PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS sistema.usuario (
   id INT NOT NULL,
   nome character varying(200) NOT NULL,
   cpf varchar(14) NOT NULL,
   logradouro varchar(250) NOT NULL,
   cidade varchar(100) NOT NULL,
   celular varchar(30) NOT NULL,
   nivel character varying(10) not null default 'USU',
   id_unidade INT NOT NULL,

   CONSTRAINT pk_usuario PRIMARY KEY (id),
   CONSTRAINT fk_unidade FOREIGN KEY (id_unidade) REFERENCES sistema.unidade(id),
   CONSTRAINT uk_cpf UNIQUE (cpf)
);