create database Blog;

use Blog;

create table TipoUsuario(
  idTipoUsuario int not null auto_increment,
  nmTipoUsuario varchar(200) not null,
  icAtivo smallint null default 1,
  dtCadastro datetime not null,
  CONSTRAINT pkIdTipoUsuario primary key(idTipoUsuario)
);

create table Usuario (
  idUsuario int not null auto_increment,
  nmUsuario varchar(255) not null,
  dtCadastro datetime not null,
  icAtivo smallint null default 1,
  nmSenhaUsuario text not null,
  nmEmailUsuario text not null,
  idTipoUsuario int not null,
  CONSTRAINT pkIdUsuario primary key(idUsuario),
  CONSTRAINT fkIdTipoUsuario foreign key (idTipoUsuario) references TipoUsuario(idTipoUsuario)
);

create table Comentario (
  idComentario int not null auto_increment,
  txtComentario text not null,
  dtCadastro datetime not null,
  icAtivo smallint null default 1,
  idUsuario int not null,
  CONSTRAINT pkIdComentario primary key(idComentario),
  CONSTRAINT fkIdComentarioUsuario foreign key (idUsuario) references Usuario(idUsuario)
);

create table Postagem (
  idPostagem int not null auto_increment,
  dtCadastro datetime not null,
  icAtivo smallint null default 1,
  idUsuario int not null,
  CONSTRAINT pkIdPostagem primary key(idPostagem),
  CONSTRAINT fkIdPostagemUsuario foreign key (idUsuario) references Usuario(idUsuario)
);

create table Categoria (
  idCategoria int not null auto_increment,
  nmCategoria varchar(200) not null,
  icAtivo smallint null default 1,
  dtCadastro datetime not null,
  CONSTRAINT pkIdCategoria primary key(idCategoria)
);

create table PostagemCategoria(
  idCategoria int not null,
  idPostagem int not null,
  CONSTRAINT fkIdPostagemCategoria foreign key (idPostagem) references Postagem(idPostagem),
  CONSTRAINT fkIdCategoriaPostagem foreign key (idCategoria) references Categoria(idCategoria)
);