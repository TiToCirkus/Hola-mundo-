// @canal A partir de la API de Pokémon: https://pokeapi.co/
// Crea un pokédex, es decir una página web donde puedas consultar pokemones, y leer información sobre cada pokemon que se muestre.
// Puedes encontrar un sitio de ejemplo que hace algo similar acá: https://pokedex.org/
// La página web debe:
// Mostrar una lista en tarjetas de, al menos, los primeros 151 pokemones. Las tarjetas deben mostrar el nombre y tipo de cada Pokémon (tipo agua, tipo fuego, tipo venenoso, etc.)
// Permitir que, al hacer click sobre la tarjeta de un pokemon, se despliegue más información, como el peso, sus movimientos (ataques), etc.
// El sitio web debe tener un buscador de pokemones, donde puedas filtrar pokemones por nombre. (Esto es un plus)
// Cosas a tener en cuenta:
// Diseño libre (Bootstrap, materialize, o tu propio css)
// Uso de clases e instancias.
// EcmaScript 6
// Repo en Github (Github pages es un plus)
const axios = require('axios')
const URL = 'https://pokeapi.co/api/v2/pokemon/'



let PokeInfo = (POKID) => {
    axios.get(`${URL}${POKID}`)
        .then(response => {
            const pokemon = {
                nombre: response.data.name,
                tipoS: response.data.types.map(tipo => tipo.type.name),
                UrlImage: response.data.sprites.front_default,
            }
            console.log(pokemon)
        })
        .catch(error => {
            console.log(error)
        })

}

let PokeFind = (limit) => {
    for (let i = 1; i <= limit; i++) {
        PokeInfo(i)
    }
}

PokeFind(3)





