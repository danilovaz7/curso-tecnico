create database Alunos;

use alunos;

CREATE TABLE Aluno (
	Id_aluno int not null auto_increment,
    Nome text not null,
    CPF int not null,
	Rg varchar(20) not null,
    CONSTRAINT pk_id_aluno PRIMARY KEY(Id_aluno)

);

CREATE TABLE Curso (
	Id_curso int not null auto_increment, 
    Nome text not null,
    Carga_horaria int not null,
    Valor_sem_desconto int not null,
	 CONSTRAINT pk_id_curso PRIMARY KEY(Id_curso)
);

CREATE TABLE Uf (
	Id_uf int not null auto_increment,
    Uf tinyint not null,
    Uf_descricao text not null,
	 CONSTRAINT pk_id_uf PRIMARY KEY(Id_uf)
);

CREATE TABLE Telefone (
	Id_telf int not null auto_increment,
    DDD tinyint null,
    telefone int null,
	 CONSTRAINT pk_id_telf PRIMARY KEY(id_telf)
);

CREATE TABLE Aluno_Curso (
	Id_aluno_curso int not null,
    Id_curso_aluno int not null,
    Data_inicio date not null,
    Data_termino date not null,
    Desconto float not null,
    CONSTRAINT fk_id_aluno_curso FOREIGN KEY (id_aluno_curso) REFERENCES Aluno(id_aluno),
	CONSTRAINT fk_id_curso_aluno FOREIGN KEY (id_curso_aluno) REFERENCES Curso(id_curso)

);
