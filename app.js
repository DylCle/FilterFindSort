const pokemon = [
    {
        id: 1,
        name: 'Pikachu',
        type: 'Thunder',
        Gen: 1
    }, {
        id: 2,
        name: 'Delibird',
        type: 'ice',
        Gen: 2
    }, {
        id: 3,
        name: 'Mudkip',
        type: 'Water',
        Gen: 3
    }
]

let findPokemon = pokemon.find(pkmn => pkmn.name === "Mudkip");

let filterPokemon = pokemon.filter(pkmn => pkmn.name.indexOf('P') === 0);

let sortedPokemon = pokemon.sort((a, b) => a.name > b.name ? 1 : -1);

console.log(sortedPokemon);