function maiorNumero(num1, num2) {
    if (num1 == num2)
        return console.log('Os números são iguais!')

    if (num1 > num2) {
        console.log('O número 1 é o maior')
    } else {
        console.log('O número 2 é o maior')
    }
}

function maiorEMenor(numeros) {
    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }

        if (numeros[i] < menor) {
            menor = numeros[i]
        }
    }

    console.log(`maior: ${maior}, menor: ${menor}`)
}

function bibliografar(nome) {

}

function quantasVezes(numeros) {
    
}