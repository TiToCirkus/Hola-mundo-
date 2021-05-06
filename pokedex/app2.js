const axios = require('axios')

let pokeinfo = (limit) => {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    let arraypokemon = [];

    axios.get(URL)
        .then(response => {
            let inpoke = response.data.results

            inpoke.forEach(pokemon => {
                axios.get(pokemon.url)
                    .then(respuestaind => {
                        let inpokeind = {
                            nombre: respuestaind.data.name,
                            urlimage: respuestaind.data.sprites.front_default,
                            tipos: respuestaind.data.types.map(tipo => tipo.type.name)

                        }
                        arraypokemon.push(inpokeind)
                    })
            })
            setTimeout(() => {
                console.log(arraypokemon);

            }, 5000);
        })

        .catch(error => {
            console.log(error)
        })


}


pokeinfo(5)
