(()=>{

    document.getElementById("searchBtn").addEventListener("click", ()=> {
        let userInput = document.getElementById("search").value;

        fetch("https://pokeapi.co/api/v2/pokemon/" + userInput + "/")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.getElementById("target").innerHTML = `${data.id}`;
                document.getElementById("img").setAttribute("src", `${data.sprites.front_shiny}`)
                document.getElementById()
            });



    })

})();