
import Pedido from "../models/Pedido.js"
import Usuario from "../models/Usuario.js"

async function createPedido(req, res) {
    const { cpfDestinatario, id_remetente, descricao, numero_apartamento } = req.body
   
    const userDestinatario = await Usuario.findOne({ where: { cpf: cpfDestinatario } })

    const pedido = Pedido.build({
        id_destinatario: userDestinatario.id,
        id_remetente:id_remetente,
        descricao:descricao,
        numero_apartamento:numero_apartamento,

    })

    try {
        await pedido.validate()
    } catch (error) {
        return res.status(400).json({ error: 'Informações de pedido inválidas: ' + error.message })
    }

    try {
        await pedido.save()
        res.status(201).json(pedido.toJSON())
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar pedido: ' + error.message })
    }
}


async function getPedidos(req, res) {
    try {
        const pedidos = await Pedido.findAll({
            include: [
                {
                    model: Usuario,
                    as: 'remetente',
                    attributes: ['id', 'nome', 'cpf']
                },
                {
                    model: Usuario,
                    as: 'destinatario',
                    attributes: ['id', 'nome', 'cpf']
                }
            ]
        });

        if (pedidos) {
            res.json(pedidos);
        } else {
            res.status(404).json({ error: 'Nenhum pedido encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pedidos' });
    }
}

async function getPedidoById(req, res) {
    const { id } = req.params

    const pedido = await Pedido.findByPk(id)
    const userDestinatario = await Usuario.findOne({ where: { id: pedido.id_destinatario } })
    const userRemetente = await Usuario.findOne({ where: { id: pedido.id_remetente } })

    if (pedido) {
        res.json({
            pedido,
            userDestinatario,
            userRemetente
        })
    } else {
        res.status(404).json({ error: 'pedido não encontrado' })
    }
}

async function deletePedido(req, res) {
    const { id } = req.params

    const pedido = await Pedido.findByPk(id)

    if (!pedido) {
        return res.status(404).json({ error: 'Categoria não encontrada' })
    }

    try {
        await pedido.destroy()
        res.json({ message: 'usuario excluído com sucesso' })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir usuario: ' + error.message })
    }
}


export default {
    createPedido,
    getPedidos,
    getPedidoById,
    deletePedido
}