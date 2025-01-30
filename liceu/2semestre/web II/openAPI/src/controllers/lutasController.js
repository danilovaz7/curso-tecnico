import Lutas from '../models/Lutas.js'

async function createLuta(req, res) {
    const { adversarios, duracao, vencedor, golpe_final,especie_vencedor,placar_pos_luta } = req.body

    const luta = Lutas.build({ adversarios, duracao, vencedor, golpe_final,especie_vencedor,placar_pos_luta })

    try {
        await luta.validate()
    } catch (error) {
        return res.status(400).json({ error: 'Informações da luta inválidas: ' + error.message })
    }

    try {
        await luta.save()
        res.status(201).json(luta.toJSON())
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar luta: ' + error.message })
    }
}

async function getLuta(req, res) {
    const { vencedor, especie_vencedor, order } = req.query
   
    let query = {}

    if (vencedor) query.vencedor = vencedor
    if (especie_vencedor) query.especie_vencedor = especie_vencedor
    
    const lutas = await Lutas.findAll({
        where:  query,
        order: order ? [[order, 'DESC']] : undefined
    })

    if (lutas) {
        res.json(lutas)
    } else {
        res.status(500).json({ error: 'Erro ao buscar as lutas' })
    }
}



export default {
    createLuta,
    getLuta,
}