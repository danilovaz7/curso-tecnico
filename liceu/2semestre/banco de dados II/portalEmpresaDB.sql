create database PortalEmpresa;
use portalempresa;

create table cliente(
id_cliente int not null auto_increment,
nm_cliente varchar(50) not null,
email_cliente varchar(60) not null,
cpf_cliente varchar(11) not null,
ic_ativo tinyint null default 1,

CONSTRAINT pkIdCliente primary key(id_cliente)
);

create table empresa(
id_empresa int not null auto_increment,
nm_empresa varchar(50) not null,
cnpj_empresa varchar(14) not null,
cep_empresa varchar(8) not null,
categoria varchar(40) not null,
ic_ativo tinyint null default 1,

CONSTRAINT pkIdEmpresa primary key(id_empresa)
);

create table funcionario(
id_funcionario int not null auto_increment,
nm_funcionario varchar(50) not null,
ic_ativo tinyint null default 1,
ddd_funcioanrio varchar(2) null,
tel_funcionario varchar(12) null,
cpf_funcionario varchar(11) not null,

CONSTRAINT pkIdFuncionario primary key(id_funcionario)
);

create table usuario(
 id_usuario int not null auto_increment,
 nm_usuario varchar(50) not null,
 ic_ativo tinyint null default 1,
 senha_usuario varchar(50) not null,

CONSTRAINT pkIdUsuario primary key(id_usuario)

);

use portalEmpresa;
select * from funcionario;
drop table empresa;
select * from cliente;