// Export comum (nomeado)
export const frase = 'Tem uma cobra na minha bota!';


// Export default
export default 'Essa é uma outra frase';


// Export renomeado
const soma = (a, b) => a + b;

export { soma as somaRenomeado };


// Export comum renomeado na importação
export const multiplica = (a, b) => a * b;


// Lista de export + renomeação
// export { soma, multiplica as multiplicaRenomeado } // Em uma única linha
export {
    soma,
    multiplica as multiplicaRenomeado2
}