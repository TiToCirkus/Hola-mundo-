const axios = require("axios");

let getpokemon = id=>{
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(URL)
    .then(response => console.log(response))
    .catch(error => console.log(error.response.status))
}

getpokemon(5415)