(()=>{

    document.getElementById("searchBtn").addEventListener("click", ()=> {

        let userInput = document.getElementById("search").value;

        fetch("https://pokeapi.co/api/v2/pokemon/" + userInput + "/")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.getElementById("pokemonID").innerHTML = `${data.id}`;
                document.getElementById("img").setAttribute("src", `${data.sprites.front_default}`)
                document.getElementById("pokemonName").innerHTML = `${data.name}`;

            });

        function getMoves(moves, ) {
            moves.forEach(function (move) {
                let pokemonMoves = document.getElementById("pokemonMoves").innerText = move['moves']

            })
        }


    })

})();