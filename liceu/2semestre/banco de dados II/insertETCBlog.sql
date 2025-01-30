
use Blog;

insert into TipoUsuario values ( null, 'administrador', 1,'20200324082033');
insert into TipoUsuario values ( null, 'comum', 1,'20200325082244');
insert into TipoUsuario values ( null, 'escritor', 1,'20200325122501');
insert into TipoUsuario values ( null, 'Admin', 1,'20200325122501');
insert into TipoUsuario values ( null, 'Comentarista', 1,'20200325122501');
insert into TipoUsuario values ( null, 'Revisor', 1,'20200325122501');
insert into TipoUsuario values ( null, 'Editor', 1,'20200325122501');



insert into Usuario values (null, 'joao',now(),1,'batata123','joao@gmail.com',1);
insert into Usuario values (null, 'maria','20230312204505',1,'mariamole','maria@gmail.com',2);
insert into Usuario values (null, 'josé','20240501123444',1,'espigademi','jose@gmail.com',3);
insert into Usuario values (null, 'caio','20240601123444',1,'caioba123','caio@gmail.com',2);
insert into Usuario values (null, 'luan','20220601123444',1,'mancivic','luan@gmail.com',3);
insert into Usuario values (null, 'thiago','20240101123434',1,'thiagomello','thiago@gmail.com',1);
insert into Usuario values (null, 'maniaco','20220101123434',1,'maniaco','maniaco@gmail.com',1);

insert into Usuario values (null, 'victor','20240101123434',1,'victor123','victor@gmail.com',4);
insert into Usuario values (null, 'hugo','20240101123434',1,'huguinho','hugo@gmail.com',4);
insert into Usuario values (null, 'manuel','20240101123434',1,'jojomaluco','manuElGamer@gmail.com',4);

insert into Usuario values (null, 'luan','20240101123434',1,'megastrucker','luan@gmail.com',5);
insert into Usuario values (null, 'ruan','20240101123434',1,'mistinho','ruan@gmail.com',5);
insert into Usuario values (null, 'luiz','20240101123434',1,'penalidade','luiz@gmail.com',5);

insert into Usuario values (null, 'rafael','20240101123434',1,'guilherme','rafa@gmail.com',6);
insert into Usuario values (null, 'fagner','20240101123434',1,'maromba','fagner@gmail.com',6);
insert into Usuario values (null, 'oswaldo','20240101123434',1,'abobora','waldo@gmail.com',6);

insert into Usuario values (null, 'talles','20240101123434',1,'mamapapaia','talles@gmail.com',7);
insert into Usuario values (null, 'murillo','20240101123434',1,'alvin','murillo@gmail.com',7);
insert into Usuario values (null, 'dandangatinho','20240101123434',1,'senhamaluca','dan@gmail.com',7);

insert into Categoria values( null, 'esportes',1,'20200330081244');
insert into Categoria values( null, 'politica',1,'20200330081344');
insert into Categoria values( null, 'paz',1,'20200330082244');
insert into Categoria values( null, 'esportes radicais',1,'20200330081244');

insert into Postagem values (null, '20240101121434','1','1');
insert into Postagem values (null, '20240101120434','1','1');

insert into Postagem values (null, '20220101123420','1','2');
insert into Postagem values (null, '20240101123410','1','2');
insert into Postagem values (null, '20240101123444','1','2');

insert into Postagem values (null, '20240101123434','1','3');
insert into Postagem values (null, '20240101123434','1','3');
insert into Postagem values (null, '20240101123434','1','3');
insert into Postagem values (null, '20240101123434','1','3');

select * from Usuario;



select * from TipoUsuario;

call categoriaFinder('esportes',@total);
select @total as 'total_de_registros';

call procuraPostagens('9',@resposta);
select @resposta as 'total_de_registros';

call atualizaRegistro('1','4444',@resposta);
select @resposta as 'status';

call embaralhaSenha('Admin');

select soma(2,4);
select frequenciaUser(1);
select frequenciaUser(2);
select frequenciaUser(99);





