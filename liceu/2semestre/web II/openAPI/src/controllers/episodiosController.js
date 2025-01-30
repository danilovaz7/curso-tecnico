import Episodios from '../models/Episodios.js'

async function createEp(req, res) {
    const { titulo, duracao, sinopse,temporada,placar_atual } = req.body

    const episodio = Episodios.build({titulo, duracao, sinopse,temporada,placar_atual })

    try {
        await episodio.validate()
    } catch (error) {
        return res.status(400).json({ error: 'Informações do episodio inválidas: ' + error.message })
    }

    try {
        await episodio.save()
        res.status(201).json(episodio.toJSON())
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar episodio: ' + error.message })
    }
}

async function getEp(req, res) {
    const { placar_atual, temporada,order } = req.query
   
    let query = {}

    if (placar_atual) query.placar_atual = placar_atual
    if (temporada) query.temporada = temporada

    const episodio = await Episodios.findAll({
        where:  query,
        order: order ? [[order, 'DESC']] : undefined
    })

    if (episodio) {
        res.json(episodio)
    } else {
        res.status(500).json({ error: 'Erro ao buscar os episodios' })
    }
}



export default {
    createEp,
    getEp,   
}