import Personagem from '../models/Personagens.js'

async function createPersonagem(req, res) {
    const { nome, descricao, idade, afiliacao, especie } = req.body

    const personagem = Personagem.build({nome, descricao, idade, afiliacao, especie})

    try {
        await personagem.validate()
    } catch (error) {
        return res.status(400).json({ error: 'Informações de personagem inválidas: ' + error.message })
    }

    try {
        await personagem.save()
        res.status(201).json(personagem.toJSON())
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar personagem: ' + error.message })
    }
}

async function getPersonagem(req, res) {
    const { especie, order,afiliacao,offset,limit } = req.query
 
    let query = {}
    
    if (especie) query.especie = especie
    if (afiliacao) query.afiliacao = afiliacao

    if(!limit || !offset){
        return   res.status(400).json({ error: 'A busca não possui os parâmetros necessários!' })
    }
    
    const personagens = await Personagem.findAll({
        where:query,
        order: order ? [[order, 'DESC']] : undefined,
        offset,
        limit
    })

    if (personagens) {
        res.json(personagens)
    } else {
        res.status(500).json({ error: 'Erro ao buscar personagem' })
    }
}




export default {
    createPersonagem,
    getPersonagem,
}