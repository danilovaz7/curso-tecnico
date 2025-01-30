'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
 CREATE PROCEDURE userAuth (IN tokenHash VARCHAR(50))
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
        INSERT INTO Usuarios (cpf, nome, tipo, foto, senha, numero_apartamento, createdAt, updatedAt)
        VALUES ('00000000000', 'Não Cadastrado', 'Coringa', 'iiiii', '123', 0, NOW(), NOW());
        SET userId = LAST_INSERT_ID();

        INSERT INTO Tokens (token_hash, id_usuario, ic_ativo, createdAt, updatedAt)
        VALUES (tokenHash, userId, 0, NOW(), NOW());
        SET tokenId = LAST_INSERT_ID();

        INSERT INTO Auditorias (id_token, id_usuario, estado_registro, dt_acesso, createdAt, updatedAt)
        VALUES (tokenId, userId, 'Não cadastrado', NOW(), NOW(), NOW());

    ELSEIF estadoToken = 0 THEN
        INSERT INTO Auditorias (id_token, id_usuario, estado_registro, dt_acesso, createdAt, updatedAt)
        VALUES (tokenId, userId, 'Negado', NOW(), NOW(), NOW());
    ELSE
        INSERT INTO Auditorias (id_token, id_usuario, estado_registro, dt_acesso, createdAt, updatedAt)
        VALUES (tokenId, userId, 'Ok', NOW(), NOW(), NOW());
    END IF;
END;
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      DROP PROCEDURE IF EXISTS userAuth;
    `);
  }
};
