CREATE DEFINER=`root`@`localhost` PROCEDURE `userAuth`(in tokenHash varchar(50))
BEGIN
	DECLARE userId INT;
    DECLARE tokenId INT;
    DECLARE totalToken INT;
    DECLARE estadoToken TINYINT;

    select count(*) into totalToken from Token where token_hash = tokenHash;
    select ic_ativo into estadoToken  from Token where token_hash = tokenHash;
	select id_usuario into userId from Token where token_hash = tokenHash;
	select id_token into tokenId from Token where token_hash = tokenHash;

    IF totalToken = 0 THEN
        INSERT INTO Usuario (cpf_usuario, nome, tipo, foto, senha, numero_apartamento) VALUES ('00000000000', 'Não Cadastrado', 'Coringa', 'iiiii', '123', 0);
		SET userId = LAST_INSERT_ID();
        
        INSERT INTO Token (token_hash, id_usuario, ic_ativo) VALUES (tokenHash, userId, 0);
        SET tokenId = LAST_INSERT_ID();

        INSERT INTO Auditoria (id_token, id_usuario, id_estado) VALUES (tokenId, userId, 3);
        
    ELSEIF estadoToken = 0 THEN
        INSERT INTO Auditoria (id_token, id_usuario, id_estado) VALUES (tokenId, userId, 2);
    ELSE
        INSERT INTO Auditoria (id_token, id_usuario, id_estado) VALUES (tokenId, userId, 1);
    END IF;
END