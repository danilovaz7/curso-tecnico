import Usuario from "../models/Usuario.js";
import Auditoria from "../models/Auditoria.js"
import Token from "../models/Token.js";
import sequelize from "../db/database.js";

async function getAuditoria(req, res) {
    try {
        const auditorias = await Auditoria.findAll({
            include: [
                {
                    model: Token,
                    attributes: ['id', 'token_hash', 'ic_ativo'],
                },
                {
                    model: Usuario,
                    attributes: ['id', 'nome', 'cpf', 'numero_apartamento', 'tipo']
                }
            ],
            order: [
                ['dt_acesso', 'DESC']  // Ordena a auditoria pela data de acesso de forma descendente
            ]
        });

        if (auditorias) {
            res.json(auditorias);
        } else {
            res.status(404).json({ error: 'Nenhuma auditoria encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar auditorias' });
    }
}


async function getAuditoriaByPk(req, res) {
    const { id } = req.params

    const auditoria = await Auditoria.findByPk(id, {
        include: [
            {
                model: Token,
                attributes: ['id', 'token_hash', 'ic_ativo'],
            },
            {
                model: Usuario,
                attributes: ['id', 'nome', 'cpf']
            }
        ]
    })


    if (auditoria) {
        res.json(auditoria.toJSON())
    } else {
        res.status(404).json({ error: 'uUuario não encontrado' })
    }
}


async function userAuth(req, res) {
    try {
        const { tokenHash } = req.body; // Pegue o tokenHash do corpo da requisição
        if (!tokenHash) {
          return res.status(400).json({ error: 'tokenHash is required' });
        }
    
        // Execute a procedure
        await sequelize.query('CALL userAuth(:tokenHash)', {
          replacements: { tokenHash }, // Passe o parâmetro
          type: sequelize.QueryTypes.RAW, // Não precisa retornar modelos, apenas resultados brutos
        });
    
        return res.status(200).json({ message: 'Procedure executed successfully.' });
      } catch (error) {
        console.error('Error executing stored procedure:', error);
        return res.status(500).json({ error: 'Failed to execute procedure.' });
      }

}

export default {
    getAuditoria,
    getAuditoriaByPk,
    userAuth
}