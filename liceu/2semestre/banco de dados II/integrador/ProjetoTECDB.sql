create database pteste;
use pteste;
drop database pteste;
create table Usuarios(
	id int not null auto_increment,
	cpf varchar(11) not null,
	nome varchar(50) not null,
    tipo varchar(20) not null,
    foto text not null,
    senha varchar(50) not null,
    numero_apartamento smallint not null,
  
	CONSTRAINT pkIdUsuario primary key(id)
);

create table Tokens(
	id int not null auto_increment,
    token_hash varchar(50) not null,
    id_usuario int not null,
    ic_ativo tinyint not null default 1,
    
	CONSTRAINT pkIdToken primary key(id),
    CONSTRAINT fkIdUsuarioToken foreign key (id_usuario) references Usuarios(id)
);

create table Auditorias(
	id int not null auto_increment,
    id_token  int not null,
    dt_acesso datetime not null default now(),
	id_usuario int not null,
    estado_registro varchar(30) not null,
    
	CONSTRAINT pkRegistro primary key(id),
	CONSTRAINT fkIdTokenAuditoria foreign key (id_token) references Tokens(id),
	CONSTRAINT fkIdUsuarioA foreign key (id_usuario) references Usuarios(id)
    
);

create table pedidos (
	id int not null auto_increment,
    id_remetente int not null,
    id_destinatario int not null,
    descricao text not null,
    
	CONSTRAINT pkPedido primary key(id),
    CONSTRAINT fkIdRemetente foreign key (id_remetente) references Usuarios(id),
    CONSTRAINT fkIdDestinatario foreign key (id_destinatario) references Usuarios(id)
);

use pteste;
select * from auditorias;

call userAuth('asdada');
