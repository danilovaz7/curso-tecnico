use projetoTEC;

drop table Token;

insert into Estado values (null,'OK');
insert into Estado values (null,'NEGADO');
insert into Estado values (null,'TOKEN NAO CADASTRADO');



insert into Token values (null,'hj52cdoj23',1,1);
insert into Token values (null,'fgdfg345234w',2,1);
insert into Token values (null,'sadafadf13',3,1);
insert into Token values (null,'afhfthfj554',4,1);
insert into Token values (null,'hndhsfadf22',5,1);
insert into Token values (null,'koottyu55',3,1);
insert into Token values (null,'fgrgsgsaaa',2,0);

insert into Usuario values (null,'12345678901','Cleber','Morador','dnkabnfaehfgiueajdjawoidjoajodasdasa2312512332a','cleber123',10);
insert into Usuario values (null,'12345678901','Luiz','Morador','dnkabnfaehfgiueajdjawoidjoajodasdasa23aaaa1s2332a','Luiz123',22);
insert into Usuario values (null,'12345678901','Liam','Morador','dnkabnfaehfgiueajdjawoidjoajodaccccsa23125112332a','123Liam',13);
insert into Usuario values (null,'12345678901','Marcio','Morador','fbnikhhdahdahduhaiduhawiudhaidhaidhaidh','1Marcio23',17);
insert into Usuario values (null,'12345678901','Luan','Morador','111111111111ihasjhdashjdiahdiasd93u492134','Luan111',10);
insert into Usuario values (null,'12345678901','Victor','Morador','gbbbbbbsdfsfjmnasidjhqwidhiandinaidnafneainifnb','Victor1231112',11);
insert into Usuario values (null,'12345678901','Não cadastrado','Nada','a','semSenha',0);

insert into Auditoria values (null, 1, now(),2,1);

call userAuth('dadadada');
call attUser('dadadada','22222222222','MenorTj','Morador','sssss','menor1231',14);
call ativaToken('dadadada');
call desativaToken('444444');

SELECT * FROM Estado;
SELECT * FROM Usuario;
SELECT * FROM Token;
SELECT * FROM Auditoria;

SELECT 
    Auditoria.id,
    Auditoria.dt_acesso,
    Usuario.nome,
    Usuario.numero_apartamento,
    Token.token_hash,
    Estado.nm_estado
FROM 
    Auditoria
INNER JOIN 
    Usuario ON Auditoria.id_usuario = Usuario.id_usuario
INNER JOIN 
    Token ON Auditoria.id_token = Token.id_token
INNER JOIN 
    Estado ON Auditoria.id_estado = Estado.id_estado;
