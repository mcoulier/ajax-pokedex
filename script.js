(()=>{

    document.getElementById("blueButton").addEventListener("click", ()=> {

        let userInput = document.getElementById("search").value;
        let moveOne = (Math.floor(Math.random() * 40) + 1)
        let moveTwo = (Math.floor(Math.random() * 40) + 1)
        let moveThree = (Math.floor(Math.random() * 40) + 1)
        let moveFour = (Math.floor(Math.random() * 40) + 1)

        fetch("https://pokeapi.co/api/v2/pokemon/" + userInput + "/")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                document.getElementById("pokemonID").innerHTML = "ID: " + data.id;
                document.getElementById("img").setAttribute("src",data.sprites.front_default);
                document.getElementById("pokemonName").innerHTML = "Name: " + data.name;
                document.getElementById("moveOne").innerHTML = data.moves[moveOne].move.name;
                document.getElementById("moveTwo").innerHTML = data.moves[moveTwo].move.name;
                document.getElementById("moveThree").innerHTML = data.moves[moveThree].move.name;
                document.getElementById("moveFour").innerHTML = data.moves[moveFour].move.name;
            });

        fetch("https://pokeapi.co/api/v2/pokemon-species/" + userInput + "/")
            .then(response => response.json())
            .then(evoData => {

                let namePoke = evoData.evolves_from_species.name;
                document.getElementById("evolution").innerHTML = evoData.evolves_from_species.name;

                fetch("https://pokeapi.co/api/v2/pokemon/" + namePoke + "/")
                    .then(response => response.json())
                    .then(evoData => {
                        console.log(evoData)
                        document.getElementById("").setAttribute("src", evoData.sprites.front_default);

                })
            })
    })
})();