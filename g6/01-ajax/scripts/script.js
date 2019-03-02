const url = 'https://swapi.co/api/planets/';
let planets, previous, next

$(() => {
    console.log('1) Table data loading')

    $('#load').on('click', () => {
        getData(url)
    })
    $('#prev').on('click', () => {
        if(!!previous) {
            getData(previous)
        }
    })
    $('#next').on('click', () => {
        if(!!next) {
            getData(next)
        }
    })
    
    console.log(planets)
    console.log('3) Table data loaded')
})
let config = {
    url,
    type: 'GET',
    success: data => {
        planets = data.results;
        next = data.next;
        previous = data.previous
        console.log('2)', data)
        showPlanets(planets)
    },
    error: err => { console.log(`something bad happened`, err) }
}
function getData(url) {
    config.url = url
    $.ajax(config)
}

function showPlanets(planets) {
    $('#planetsData').html('')
    for(const planet of planets) {
        $('#planetsData').append(`
        <tr>
            <td>${planet.name}</td>
            <td>${planet.diameter}</td>
            <td>${planet.climate}</td>
            <td>${planet.terrain}</td>
        </tr>
        `)
    }
}

// $.ajax({
//     url,
//     type: 'POST', //POST, DELETE, PUT, PATCH
//     success: function(data) {
//         // ourData = JSON.parse(data)
//         dsada
//         return data
//     },
//     error: function(err) {
//         console.log(`Something bad happened ${err}`)
//     },
//     data: JSON.stringify({}),
//     'Content-Type': 'application/json'
// })

// fetch(url).then(res => res.json()).then(res => console.log(res))