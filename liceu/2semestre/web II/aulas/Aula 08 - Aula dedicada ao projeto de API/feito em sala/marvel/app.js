const offset = 100
const url = `https://gateway.marvel.com/v1/public/characters?ts=1724421178553&apikey=4bf0c6db810f3ad20c1ffd2053ad8bb8&hash=73fee9bc718c43127f2f310d66045a74&limit=100&offset=${offset}`

fetch(url)
    .then(response => response.json())
    .then(json => {
        json.data.results.forEach(hero => {
            if (hero.description)
                console.log(hero.name)
        })
    })