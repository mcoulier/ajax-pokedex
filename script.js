(()=>{

    document.getElementById("blueButton").addEventListener("click", ()=> {

        let userInput = document.getElementById("search").value;
        let moveOne = (Math.floor(Math.random() * 40) + 1)
        let moveTwo = (Math.floor(Math.random() * 40) + 1)
        let moveThree = (Math.floor(Math.random() * 40) + 1)
        let moveFour = (Math.floor(Math.random() * 40) + 1)

        function randomMove (){

        }

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

        fetch("https://pokeapi.co/api/v2/evolution-chain/" + evoData.id + "/")
            .then(response => response.json())
            .then(evoData => {
                console.log(evoData)
                document.getElementById("evolution").innerHTML = evoData.chain.is_baby;
            })
    })
})();