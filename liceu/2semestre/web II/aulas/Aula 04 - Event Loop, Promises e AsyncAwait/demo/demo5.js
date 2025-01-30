const url = 'https://jsonplaceholder.typicode.com/posts/1'

async function chamaApi() {
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
}

chamaApi()