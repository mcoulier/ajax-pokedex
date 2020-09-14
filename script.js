(()=>{
    async function fetchPokemon(pokemonId){

        let sear
    }
    document.getElementById("searchBtn").addEventListener("click", ()=> {

            let userInput = document.getElementById("search").value;

        fetch("https://pokeapi.co/api/v2/pokemon/" + userInput )
            .then(response => response.json())
            .then(allpokemon => console.log(allpokemon))

    })



})();

