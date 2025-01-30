import md5 from "md5"

const ts = Date.now()
const publicKey = '4bf0c6db810f3ad20c1ffd2053ad8bb8'
const privateKey = 'PRIVATE_KEY' // Substituir pela chave privada

const hash = md5(ts + privateKey + publicKey)

console.log(ts)
console.log(hash)