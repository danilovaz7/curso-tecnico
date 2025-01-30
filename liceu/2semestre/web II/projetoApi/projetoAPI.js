import inquirer from 'inquirer';
import chalk, { colorNames } from 'chalk'
import boxen from 'boxen';

async function geracaoPokemon() {
    let urlComplete = ''
    console.log(urlComplete)
    const escolhaGeracao = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'geracao',
                message: "Em qual geração deseja lutar?",
                choices: [
                    "1° Geração",
                    "2° Geração",
                    "3° Geração",
                    "4° Geração",
                    "5° Geração",
                    "6° Geração",
                    "7° Geração",
                    "8° Geração",
                    "9° Geração"
                ]
            }
        ])

    const geracaoEscolhida = escolhaGeracao.geracao;
    switch (geracaoEscolhida) {
        case '1° Geração':
            urlComplete = 'https://pokeapi.co/api/v2/pokemon?limit=151'
            break;
        case '2° Geração':
            urlComplete = 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=100'
            break;
        case '3° Geração':
            urlComplete = 'https://pokeapi.co/api/v2/pokemon?offset=251&limit=135'
            break;
        case '4° Geração':
            urlComplete = 'https://pokeapi.co/api/v2/pokemon?offset=386&limit=107'
            break;
        case '5° Geração':
            urlComplete = 'https://pokeapi.co/api/v2/pokemon?offset=493&limit=156'
            break;
        case '6° Geração':
            urlComplete = 'https://pokeapi.co/api/v2/pokemon?offset=649&limit=72'
            break;
        case '7° Geração':
            urlComplete = 'https://pokeapi.co/api/v2/pokemon?offset=721&limit=88'
            break;
        case '8° Geração':
            urlComplete = 'https://pokeapi.co/api/v2/pokemon?offset=809&limit=96'
            break;
        case '9° Geração':
            urlComplete = 'https://pokeapi.co/api/v2/pokemon?offset=905&limit=120'
            break;
    }
    return urlComplete
}
const urlPoke = await geracaoPokemon()

async function listaPokemons() {
    const response = await fetch(urlPoke)
    const json = await response.json()

    const indicePokemon = Math.floor(Math.random() * json.results.length);
    const pokemonIA = json.results[indicePokemon];

    return pokemonIA.name;
}

async function seuPokemon() {

    const response = await fetch(urlPoke)
    const json = await response.json()

    console.log(boxen(chalk.hex('0ea9c4')("Bem vindo ao PokeITS, escolha um dos pokemons abaixo para ser seu parceiro nesta batalha !!")))

    const escolha = json.results.map((pokemon) => {
        return pokemon.name;
    })

    const resposta = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'nome',
                message: "Selecione um pokemon",
                choices: escolha
            }
        ])
    const pokemon = resposta.nome;
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon
    const responsePoke = await fetch(url)

    return await responsePoke.json()
}

async function pokemonOponente() {
    const pokemon2 = await listaPokemons()
    const url2 = 'https://pokeapi.co/api/v2/pokemon/' + pokemon2
    const response = await fetch(url2)
    return await response.json()
}

async function main() {
    const json = await seuPokemon()
    const jsonOponente = await pokemonOponente()
    //Seus stats
    let vida = json.stats[0].base_stat
    let vidaInicial = vida;
    let ataque = json.stats[1].base_stat
    const defesa = json.stats[2].base_stat
    const velocidade = json.stats[5].base_stat
    const tipo = json.types[0].type.name
    let nomePokemon = aplicaBgPokemon(tipo, json);
    let ataques = [];
    for (let i = 0; i < 4; i++) {
        const indiceAtaque = Math.floor(Math.random() * json.moves.length);
        const ataque = json.moves[indiceAtaque];
        ataques[i] = ataque.move.name;
    }
    // Stats do oponente
    let vidaOponente = jsonOponente.stats[0].base_stat
    let vidaInicialOponente = vidaOponente;
    let ataqueOponente = jsonOponente.stats[1].base_stat
    const defesaOponente = jsonOponente.stats[2].base_stat
    const velocidadeOponente = jsonOponente.stats[5].base_stat
    const tipoOponente = jsonOponente.types[0].type.name
    let nomeOponente = aplicaBgPokemon(tipoOponente, jsonOponente);
    let ataquesAdversario = [];
    for (let i = 0; i < 4; i++) {
        const indiceAtaqueOponente = Math.floor(Math.random() * jsonOponente.moves.length);
        const ataqueOponente = jsonOponente.moves[indiceAtaqueOponente];
        ataquesAdversario[i] = ataqueOponente.move.name;
    }

    console.log("//////////////////////////////////////")
    console.log("Você escolheu: " + nomePokemon)
    console.log("Vida inicial: " + vidaInicial)
    console.log("//////////////////////////////////////")
    console.log(`Um ${nomeOponente} selvagem apareceu !`)
    console.log("Vida inicial: " + vidaOponente)
    console.log("//////////////////////////////////////")

    ataque = atacar(tipo, ataque, tipoOponente)
    ataqueOponente = atacar(tipoOponente, ataqueOponente, tipo)
    let cont = 1;

    do {
        console.log(boxen(`TURNO ${cont}`, { padding: 0.5 }, { borderStyle: 'double' }))
        const indiceAtaqueOponente = Math.floor(Math.random() * ataquesAdversario.length);
        const ataqueOponenteEscolhido = ataquesAdversario[indiceAtaqueOponente];
        const comecoRodada = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'turno',
                    message: "Oque deseja fazer? ",
                    choices: [
                        "Atacar",
                        "Curar",
                        "Capturar",
                        "Run"
                    ]
                }
            ])
        const escolhaTurno = comecoRodada.turno;

        switch (escolhaTurno) {
            case 'Atacar':
                const rodada = await inquirer
                    .prompt([
                        {
                            type: 'list',
                            name: 'atack',
                            message: "Escolha uma ataque",
                            choices: ataques
                        }
                    ])
                switch (velocidade > velocidadeOponente) {
                    case true:
                        if (ataque > defesaOponente) {
                            vidaOponente -= ataque - defesaOponente
                        } else {
                            vidaOponente -= 1
                        }
                        console.log(`${nomePokemon} usou ${rodada.atack}!`)
                        console.log(chalk.red(`Vida do oponente caiu para: `) + porcentagemVida(estagioVida(vidaInicialOponente, vidaOponente), vidaOponente))

                        if (vidaOponente <= 0) {
                            console.log(boxen(chalk.yellow('VOCÊ VENCEU !!!'), { padding: 0.5 }))
                            process.exit(0)
                        }

                        if (ataqueOponente > defesa) {
                            vida -= ataqueOponente - defesa
                        } else {
                            vida -= 1
                        }
                        console.log(`${nomeOponente} usou ${ataqueOponenteEscolhido}!`);
                        console.log(chalk.blue(`Sua vida caiu para: `) + porcentagemVida(estagioVida(vidaInicial, vida), vida))

                        if (vida <= 0) {
                            console.log(boxen(chalk.red('VOCÊ PEREDEU :('), { padding: 0.5 }))
                            process.exit(0)
                        }
                        break;
                    case false:
                        if (ataqueOponente > defesa) {
                            vida -= ataqueOponente - defesa
                        } else {
                            vida -= 1
                        }
                        console.log(`${nomeOponente} usou ${ataqueOponenteEscolhido}!`);
                        console.log(chalk.blue(`Sua vida caiu para: `) + porcentagemVida(estagioVida(vidaInicial, vida), vida))

                        if (vida <= 0) {
                            console.log(boxen(chalk.red('VOCÊ PEREDEU :('), { padding: 0.5 }))
                            process.exit(0)
                        }

                        if (ataque > defesaOponente) {
                            vidaOponente -= ataque - defesaOponente
                        } else {
                            vidaOponente -= 1
                        }
                        console.log(`${nomePokemon} usou ${rodada.atack}!`)
                        console.log(chalk.red(`Vida do oponente caiu para: `) + porcentagemVida(estagioVida(vidaInicialOponente, vidaOponente), vidaOponente))

                        if (vidaOponente <= 0) {
                            console.log(boxen(chalk.yellow('VOCÊ VENCEU !!!'), { padding: 0.5 }))
                            process.exit(0)
                        }
                        break;
                }
                break;
            case 'Curar':
                let vidaAnterior = vida
                vida += 30;

                if (vida > vidaInicial) {
                    vida = vidaInicial
                }
                let vidaRestaurada = vida - vidaAnterior
                console.log(`${nomePokemon} ${chalk.grey(`restaurou ${vidaRestaurada} ponto(s) de vida. Vida atual:`)}` + porcentagemVida(estagioVida(vidaInicial, vida), vida))

                if (ataqueOponente > defesa) {
                    vida -= ataqueOponente - defesa
                } else {
                    vida -= 1
                }
                console.log(`${nomeOponente} usou ${ataqueOponenteEscolhido}!`);
                console.log(chalk.blue(`Sua vida caiu para: `) + porcentagemVida(estagioVida(vidaInicial, vida), vida))

                if (vida <= 0) {
                    console.log(boxen(chalk.red('VOCÊ PEREDEU :('), { padding: 0.5 }))
                    process.exit(0)
                }
                break;
            case 'Capturar':
                console.log(chalk.hex('b89e14').inverse(' Você lançou a Pokebola no pokemon selvagem '))
                let chanceCaptura = captura(estagioVida(vidaInicialOponente, vidaOponente))

                if (chanceCaptura < 10) {
                    console.log(boxen(chalk.yellow('Parabens voce capturou o pokemon adversario')))
                    process.exit(0)
                } else {
                    console.log(chalk.yellow('O pokemon adversario quebrou a Pokebola'))

                    if (ataqueOponente > defesa) {
                        vida -= ataqueOponente - defesa
                    } else {
                        vida -= 1
                    }
                    console.log(`${nomeOponente} usou ${ataqueOponenteEscolhido}!`);
                    console.log(chalk.blue(`Sua vida caiu para: `) + porcentagemVida(estagioVida(vidaInicial, vida), vida))

                    if (vida <= 0) {
                        console.log(boxen(chalk.red('VOCÊ PEREDEU :('), { padding: 0.5 }))
                        process.exit(0)
                    }
                }
                break;
            case 'Run':
                console.log(boxen(chalk.yellow('VOCÊ FUGIU DA BATALHA, QUE MEDROSO')))
                process.exit(0);
        }
        cont++;
    } while (vida > 0 && vidaOponente > 0)
}

main()

function estagioVida(vidaInicial, vida) {
    let vidaAtual = vida;
    let porcentVida = (vidaAtual / vidaInicial) * 100;
    let qtdVida = '';

    if (porcentVida > 50) {
        qtdVida = 'High'
    } else if (porcentVida < 50 && porcentVida > 10) {
        qtdVida = 'Half'
    } else {
        qtdVida = 'Low'
    }
    return qtdVida
}

function porcentagemVida(qtdVIda, vida) {
    const qtdVida = qtdVIda
    let vidaAtual = vida;
    switch (qtdVida) {
        case 'High':
            vidaAtual = chalk.green(vida);
            break;
        case 'Half':
            vidaAtual = chalk.yellow(vida);
            break;
        case 'Low':
            vidaAtual = chalk.red(vida);
            break;
    }
    return vidaAtual
}

function captura(qtdVIda) {
    let chanceCaptura
    const qtdVida = qtdVIda

    switch (qtdVida) {
        case 'High':
            chanceCaptura = Math.floor(Math.random() * 100)
            break;
        case 'Half':
            chanceCaptura = Math.floor(Math.random() * 40)
            break;
        case 'Low':
            chanceCaptura = Math.floor(Math.random() * 15)
            break;
    }
    return chanceCaptura
}

function aplicaBgPokemon(tipoPokemon, jsonPokemon) {
    let nomePokemon = jsonPokemon.name.charAt(0).toUpperCase() + jsonPokemon.name.slice(1);
    let nomeColorido = '';

    const typeMap = {
        normal: 'A8A77A',
        fire: 'EE8130',
        water: '6390F0',
        electric: 'F7D02C',
        grass: '7AC74C',
        ice: '96D9D6',
        fighting: 'C22E28',
        poison: 'A33EA1',
        ground: 'E2BF65',
        flying: 'A98FF3',
        psychic: 'F95587',
        bug: 'A6B91A',
        rock: 'B6A136',
        ghost: '735797',
        dragon: '6F35FC',
        dark: '705746',
        steel: 'B7B7CE',
        fairy: 'D685AD'
    }

    const color = typeMap[tipoPokemon]
    nomeColorido = chalk.hex(color).inverse(' ' + nomePokemon + ' ');
    return nomeColorido;
}

function atacar(tipoPokemon, ataquePokemon, tipoAdversario) {
    const atackMap = {
        normal: {
            rock: 0.5, steel: 0.5, ghost: 0
        },
        fire: {
            grass: 2, ice: 2, bug: 2, steel: 2, fire: 0.5, water: 0.5, rock: 0.5, dragon: 0.5,
        },
        water: {
            fire: 2, ground: 2, rock: 2, water: 0.5, grass: 0.5, dragon: 0.5
        },
        electric: {
            water: 2, flying: 2, electric: 0.5, grass: 0.5, dragon: 0.5, ground: 0
        },
        grass: {
            water: 2, ground: 2, rock: 2, fire: 0.5, grass: 0.5, poison: 0.5, flying: 0.5, bug: 0.5, dragon: 0.5, steel: 0.5
        },
        ice: {
            grass: 2, ground: 2, flying: 2, dragon: 2, fire: 0.5, water: 0.5, ice: 0.5, steel: 0.5
        },
        fighting: {
            normal: 2, ice: 2, rock: 2, dark: 2, steel: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, fairy: 0.5, ghost: 0
        },
        poison: {
            grass: 2, fairy: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0
        },
        ground: {
            fire: 2, electric: 2, poison: 2, rock: 2, steel: 2, grass: 0.5, bug: 0.5, flying: 0
        },
        flying: {
            grass: 2, fighting: 2, bug: 2, electric: 0.5, rock: 0.5, steel: 0.5
        },
        psychic: {
            fighting: 2, poison: 2, psychic: 0.5, steel: 0.5, dark: 0
        },
        bug: {
            grass: 2, psychic: 2, dark: 2, fire: 0.5, fighting: 0.5, poison: 0.5, flying: 0.5, ghost: 0.5, steel: 0.5, fairy: 0.5,
        },
        rock: {
            fire: 2, ice: 2, flying: 2, bug: 2, fighting: 0.5, ground: 0.5, steel: 0.5

        },
        ghost: {
            psychic: 2, ghost: 2, dark: 0.5, normal: 0
        },
        dragon: {
            dragon: 2, steel: 0.5, fairy: 0
        },
        dark: {
            psychic: 2, ghost: 2, fighting: 0.5, dark: 0.5, fairy: 0.5
        },
        steel: {
            ice: 2, rock: 2, fairy: 2, fire: 0.5, water: 0.5, electric: 0.5, steel: 0.5,
        },
        fairy: {
            fighting: 2, dragon: 2, dark: 2, fire: 0.5, poison: 0.5, steel: 0.5
        }
    }
    const multiplicador = atackMap[tipoPokemon][tipoAdversario]

    if (multiplicador == undefined) {
        return ataquePokemon
    } else {
        return ataquePokemon *= multiplicador
    }
}