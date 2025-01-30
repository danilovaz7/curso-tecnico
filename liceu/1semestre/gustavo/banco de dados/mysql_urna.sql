
create database eleicoes_2024;

use eleicoes_2024;

CREATE TABLE Eleitor 
( 
 id_eleitor INT NOT NULL auto_increment,
 nm_eleitor TEXT NOT NULL,  
 nm_email_eleitor TEXT NOT NULL,
 dt_inscricao_eleitor date not null,
 ic_ativo_eleitor tinyint not null default 1,
 CONSTRAINT pk_id_eleitor PRIMARY KEY(id_eleitor)
); 

CREATE TABLE Candidato 
( 
 id_candidato INT not null auto_increment,
 id_eleitor_candidato INT NOT NULL unique,
 ic_ativo_candidato tinyint not null default 1,  
 nm_fantasia_candidato VARCHAR(255),  
 id_candidato_chapa INT not null,
dt_inscricao_candidato date not null,
PRIMARY KEY pk_id_candidato (id_candidato), 
CONSTRAINT fk_id_eleitor_candidato FOREIGN KEY (id_eleitor_candidato) REFERENCES Eleitor(id_eleitor),
CONSTRAINT fk_id_candidato_chapa FOREIGN KEY (id_candidato_chapa) REFERENCES Chapa(id_chapa)
); 


Create table Chapa
(
	id_chapa INT not null auto_increment,
    dt_inscricao_chapa date not null,
    ic_ativo_chapa tinyint not null default 1,
    nm_fantasia_chapa text,
    nm_path_url_logotipo_chapa text,
    PRIMARY KEY pk_id_chapa (id_chapa)
);


CREATE TABLE Voto 
( 
 id_voto INT NOT NULL auto_increment,  
 id_eleitor_voto INT NOT NULL UNIQUE,  
 id_chapa_voto INT NOT NULL,  
 ic_valido_voto smallint not null default 1,  
 dt_voto DATETIME not null default now(), 
PRIMARY KEY pk_id_voto (id_voto),
CONSTRAINT fk_id_eleitor_voto FOREIGN KEY (id_eleitor_voto) REFERENCES eleitor(id_eleitor),
CONSTRAINT fk_id_chapa_voto FOREIGN KEY (id_chapa_voto) REFERENCES chapa(id_chapa)
); 