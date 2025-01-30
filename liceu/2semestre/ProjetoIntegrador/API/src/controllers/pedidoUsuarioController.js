
import PedidoUsuario from "../models/PedidoUsuario.js"
import Usuario from "../models/Usuario.js"

async function createPedido(req, res) {
    const { id_remetente, nome,cpf,tipo,foto,senha,numero_apartamento } = req.body
   
    console.log(cpf)
    const pedido = PedidoUsuario.build({ id_remetente, nome,cpf,tipo,foto,senha,numero_apartamento })


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
        const pedidos = await PedidoUsuario.findAll({
            include: [
                {
                    model: Usuario,
                    as: 'remetenteuser',
                    attributes: ['id', 'nome', 'cpf','foto','tipo','senha','numero_apartamento']
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

    const pedido = await PedidoUsuario.findByPk(id)
    const userRemetente = await Usuario.findOne({ where: { id: pedido.id_remetente } })

    if (pedido) {
        res.json({
            pedido,
            userRemetente
        })
    } else {
        res.status(404).json({ error: 'pedido não encontrado' })
    }
}

async function deletePedido(req, res) {
    const { id } = req.params

    const pedido = await PedidoUsuario.findByPk(id)

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