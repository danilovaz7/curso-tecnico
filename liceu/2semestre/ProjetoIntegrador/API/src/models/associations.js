import Auditoria from './Auditoria.js';
import Usuario from './Usuario.js';
import Token from './Token.js';
import Session from './Session.js';
import Pedido from './Pedido.js';
import PedidoUsuario from './PedidoUsuario.js';

// Associações de Token com Usuario
Token.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Usuario.hasMany(Token, { foreignKey: 'id_usuario' });

// Associações de Auditoria com Usuario, Estado e Token
Auditoria.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Usuario.hasMany(Auditoria, { foreignKey: 'id_usuario' });


Auditoria.belongsTo(Token, { foreignKey: 'id_token' });
Token.hasMany(Auditoria, { foreignKey: 'id_token' });

// Associações de Session com Usuario
Session.belongsTo(Usuario, { foreignKey: 'userId' });
Usuario.hasMany(Session, { foreignKey: 'userId' });

// Associações de Pedido com Usuario (Remetente e Destinatário)
Pedido.belongsTo(Usuario, { as: 'remetente', foreignKey: 'id_remetente' });
Pedido.belongsTo(Usuario, { as: 'destinatario', foreignKey: 'id_destinatario' });

Usuario.hasMany(Pedido, { as: 'pedidosComoRemetente', foreignKey: 'id_remetente' });
Usuario.hasMany(Pedido, { as: 'pedidosComoDestinatario', foreignKey: 'id_destinatario' });

PedidoUsuario.belongsTo(Usuario, {  as: 'remetenteuser', foreignKey: 'id_remetente' });
Usuario.hasMany(PedidoUsuario, { as: 'pedidosComoRemetenteuser',foreignKey: 'id_remetente' });