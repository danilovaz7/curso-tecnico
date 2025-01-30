CREATE DEFINER=`danilo`@`localhost` PROCEDURE `userAuth`(in tokenHash varchar(50))
BEGIN
    DECLARE userId INT;
    DECLARE tokenId INT;
    DECLARE totalToken INT;
    DECLARE estadoToken TINYINT;

    SELECT COUNT(*) INTO totalToken FROM Tokens WHERE token_hash = tokenHash;
    SELECT ic_ativo INTO estadoToken FROM Tokens WHERE token_hash = tokenHash;
    SELECT id_usuario INTO userId FROM Tokens WHERE token_hash = tokenHash;
    SELECT id INTO tokenId FROM Tokens WHERE token_hash = tokenHash;

    IF totalToken = 0 THEN
        INSERT INTO Usuarios (cpf, nome, tipo, foto, senha, numero_apartamento)
        VALUES ('00000000000', 'Não Cadastrado', 'Coringa', 'iiiii', '123', 0);
        SET userId = LAST_INSERT_ID();

        INSERT INTO Tokens (token_hash, id_usuario, ic_ativo)
        VALUES (tokenHash, userId, 0);
        SET tokenId = LAST_INSERT_ID();

        INSERT INTO Auditorias (id_token, id_usuario, estado_registro, dt_acesso)
        VALUES (tokenId, userId, 'Não cadastrado', NOW());

    ELSEIF estadoToken = 0 THEN
        INSERT INTO Auditorias (id_token, id_usuario, estado_registro, dt_acesso)
        VALUES (tokenId, userId, 'Negado', NOW());
    ELSE
        INSERT INTO Auditorias (id_token, id_usuario, estado_registro, dt_acesso)
        VALUES (tokenId, userId, 'Ok', NOW());
    END IF;
END