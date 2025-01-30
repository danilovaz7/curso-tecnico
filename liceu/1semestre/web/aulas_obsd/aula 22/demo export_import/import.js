// Import nomeado
import { frase } from './export.js';

console.log(frase); // => Tem uma cobra na minha bota!


// Import default
import novaFrase from './export.js';

console.log(novaFrase); // => Essa é uma outra frase


// Import renomeado na exportação 
import { somaRenomeado } from './export.js';

console.log(somaRenomeado(1, 2)); // => 3


// Import renomeado
import { multiplica as multiplicaRenomeado } from './export.js';

console.log(multiplicaRenomeado(2, 3)); // => 6


// Lista de import + renomeação
// import { frase as novaFrase, multiplica as novoNome } from './export.js'; // Em uma única linha
import {
    soma as somaRenomeado2,
    multiplicaRenomeado2
} from './export.js';

console.log(somaRenomeado2(1, 2)); // => 3
console.log(multiplicaRenomeado2(2, 3)); // => 6