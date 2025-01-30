import asciify from 'asciify-image'

const options = {
    fit:    'box',
    width:  50,
    height: 30
}

const url = 'https://i.annihil.us/u/prod/marvel/i/mg/c/90/54edf8eb8f102.jpg'

const asciified = await asciify(url, options);

console.log(asciified)