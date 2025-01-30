
const argumentos = process.argv.slice(2)

if (argumentos.length != 3) {
    console.error('Número de parâmetros incorreto, eram 3 maluco')
    process.exit(1)
}

// const operador = argumentos[0]
const [operador, num1, num2] = argumentos

const numero1 = parseFloat(num1)
const numero2 = parseFloat(num2)

if (isNaN(numero1) || isNaN(numero2)) {
    console.error('coloca numero po')
    process.exit(1)
}

function soma(n1, n2) {
    return n1 + n2
}

function sub(n1, n2) {
    return n1 - n2
}

function mult(n1, n2) {
    return n1 * n2
}

function div(n1, n2) {
    if (n2 == 0) {
        console.error('divisao por zero cara?')
        process.exit(1)
    }

    return n1 / n2
}

let resultado
switch (operador) {
    case 'soma':
        resultado = soma(numero1, numero2)
        break
    case 'sub':
        resultado = sub(numero1, numero2)
        break
    case 'mult':
        resultado = mult(numero1, numero2)
        break
    case 'div':
        resultado = div(numero1, numero2)
        break
    default:
        console.error('coloca um operador valido po')
        process.exit(1)
}

console.log(resultado)