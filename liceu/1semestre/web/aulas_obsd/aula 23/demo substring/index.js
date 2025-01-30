const minhaString = 'string';

minhaString.substring(0, 3);
// 'str'

minhaString.substring(2, 4);
// 'ri'

// Se omitirmos o segundo parâmetro, ele irá pegar até o final da string
minhaString.substring(3);
// 'ing'

// ---------------------------------------------------------------------------------------

// O método slice é bem parecido com o substring, mas aceita índices negativos
minhaString.slice(0, 3);
// 'str'

minhaString.slice(3);
// 'ing'

// Quando passamos índices negativos, ele irá pegar a partir do final da string
minhaString.slice(-3);
// 'ing'

// ---------------------------------------------------------------------------------------

// Cortando a string em um array com split
minhaString.split('');
// ['s', 't', 'r', 'i', 'n', 'g']

minhaString.split('r');
// ['st', 'ing']

// Podemos passar um espaço para cortar a string em palavras
const frase = 'Tem uma cobra na minha bota!'
frase.split(' ');
// ['Tem', 'uma', 'cobra', 'na', 'minha', 'bota!']