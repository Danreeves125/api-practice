const http = new HttpRequest;

let heroId = Math.floor(Math.random() * 731 + 1)

http.get(`https://www.superheroapi.com/api.php/3416344518392928/${heroId}`)
    .then(data => buildCard(data))
    .catch(err => console.log(err))

function buildCard(hero) {
    const li = document.createElement('li');
    li.innerHTML = `
       <li><img src="${hero.image.url}" alt="${hero.name}"></li>
       <li>Name: ${hero.name}</li>
       <li>Connections: ${hero.connections.relatives}</li>
       <li>Intelligence: ${hero.powerstats.intelligence}</li>
    `;

    console.log(hero)

    document.querySelector('.hero-list').appendChild(li);
}