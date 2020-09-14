(()=>{
    document.getElementById("searchBtn").addEventListener("click", ()=> {

            let userInput = document.getElementById("search").value
            let url = "https://pokeapi.co/api/v2/pokemon/" + userInput;
            console.log(userInput)

    })

    fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
        .then(response => response.json())
        .then(allpokemon => console.log(allpokemon))


})();

