const url = 'https://jsonplaceholder.typicode.com/posts/1'

fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))