const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("oi"); // retornar com sucesso
        // reject("oi"); // retornar com erro
    }, 3000);
});

minhaPromise
    .then((res) => console.log(`deu sucesso: ${res}`))
    .catch((err) => console.log(`deu erro: ${err}`));