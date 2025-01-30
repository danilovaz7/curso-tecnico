const tick = Date.now()
const log = (v) => console.log(`${v} \n Tempo: ${Date.now() - tick}ms`)

log('Passo 1')

setTimeout(_ => log('Passo 2'), 0) // Tarefa agendada para o fim da fila de execução

log('Passo 3')

let i = 0
while (i < 1000000000) { i++ } // Simulando um processamento pesado

log('Passo 4')

// Resultado:
// Passo 1
//  Tempo: 0ms
// Passo 3
//  Tempo: 8ms
// Passo 4
//  Tempo: 753ms
// Passo 2
//  Tempo: 755ms