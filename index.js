//DOM Elements creation

function renderPokemon(data){
    const pokeDex = document.getElementsByClassName("poke-dex");
    
    const pokeCard = document.createElement('div');
    const pokeName = document.createElement('p');
    const pokeId = document.createElement('p');
    const pokeFrontImage = document.createElement('img');
    const pokeTypes = document.createElement('p');
    const pokeHeight = document.createElement('p');
    const pokeWeight = document.createElement('p');
    const infoButton = document.createElement("button");
    
    //Adding id's/classes to DOM elements
    pokeCard.className = "poke-card";
    pokeName.id = "poke-name";
    pokeId.id = "poke-id";
    pokeFrontImage.id = "poke-front-image";
    pokeTypes.id = "poke-types";
    pokeHeight.id = "poke-height";
    pokeWeight.id = "poke-weight";
    infoButton.id = "info-button";
    
    
    //Content/attributes for each newly created DOM element.
    pokeName.textContent = capitalizePokemonName(data.name);
    pokeId.textContent = pokemonId(data);
    pokeFrontImage.src = data.sprites.front_default;
    pokeHeight.textContent = `Height: ${data.height} m`;
    pokeWeight.textContent = `Weight: ${data.weight} kg`;
    pokeTypes.textContent = data.types.map((type) => type.type.name).join(', ');
    infoButton.textContent = "More Info!";
    
    //Event Listeners
    infoButton.addEventListener('click', clickEventCallback);
    pokeform.addEventListener('input', searchPokemon);
    pokeform.addEventListener('submit', searchPokemon);
    
    
    //Appending all the correctly nested elements within each parent node. Not seen in HTML file, the created 
    //elements, used js to apply dom manipulation for insertion of each element.
    pokeDex[0].append(pokeCard);
    pokeCard.append(pokeName, pokeTypes, pokeId, pokeFrontImage, pokeHeight, pokeWeight, infoButton);
    }
       
    
    
    //Made the function that will have all the elements and their information for the pokemon card that will pop up.
    function displayPokemonCard(data){
    const pokeCardInfo = document.getElementsByClassName("modal");
    
    const pokeImage = document.getElementById('poke-info-img');
    const pokeAttack = document.getElementById('poke-info-attack');
    const pokeDefense = document.getElementById('poke-info-defense');
    const pokeHp = document.getElementById('poke-info-hp');
    const pokeMoves1 = document.getElementById('poke-info-move1');
    const pokeMoves2 = document.getElementById('poke-info-move2');
    
    pokeImage.src = data.sprites.front_shiny;
    pokeImage.alt = "The Shiny Version!";
    pokeAttack.textContent = `ATT: ${data.stats[1].base_stat}`;
    pokeDefense.textContent = `DEF: ${data.stats[2].base_stat}`;
    pokeHp.textContent = `HP: ${data.stats[0].base_stat}`;
    pokeMoves1.textContent = `Move 1: ${data.moves[0].move.name}`;
    pokeMoves2.textContent = `Move 2: ${data.moves[1].move.name}`;
    }
    
    
    
    
    // const capitalize = str => str[0].toUpperCase() + str.substr(1);
    
     async function fetchingDefaultPokemon(){
        for (i = 1; i < 30; i++){
            const base_URL = `https://pokeapi.co/api/v2/pokemon/${i}`;
            await fetch(base_URL)
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    renderPokemon(data);
            }).catch(error => {
                console.log(`My error: ${error}`)
            });
        }
    }
    fetchingDefaultPokemon();
    
    
    //Functions
    async function clickEventCallback(){
        // get parent node of button
        const parent = this.parentNode;
        // get id of parent node
        const name = parent.querySelector("#poke-name").textContent;
        const base_URL = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
        await fetch(base_URL)
            .then(resp => resp.json())
            .then(data => {
                displayPokemonCard(data);
        }).catch(error => {
            console.log(`My error: ${error}`)
        });
        // make pokecard-info visible
        const pokeCardInfo = document.getElementsByClassName("modal-container");
        pokeCardInfo[0].style.display = "flex";
        // add event listener to close button
        const closeButton = document.getElementById("close-info-panel");
        closeButton.addEventListener('click', closeInfoCallback);
    
    }
    
    function closeInfoCallback(){
        const pokeCardInfo = document.getElementsByClassName("modal-container");
        pokeCardInfo[0].style.display = "none";
    }
    
    async function searchPokemon(e, data){
        e.preventDefault();
        const pokeCards = document.getElementsByClassName("poke-card");
        for (let i = 0; i < pokeCards.length; i++){
            pokeCards[i].style.display = "";
        }
        const query = document.querySelector("#poke-input").value;
        const base_URL = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
        pokeform.reset();

        // Iterate through the pokeCards array and if query is included in the name of the poke-card then display that pokemon card and hide the rest & if query is not empty
        if (query !== ""){
            for(let i = 0; i < pokeCards.length; i++){
                const pokeName = pokeCards[i].querySelector("#poke-name").textContent;
                if (pokeName.toLowerCase().includes(query.toLowerCase())){
                    pokeCards[i].style.display = "";
                } else {
                    pokeCards[i].style.display = "none";
                }
            }
        }
        console.log(query);
    }
    
    function capitalizePokemonName(string){
        return string[0].toUpperCase() + string.slice(1);
    }
    
    function pokemonId(data){
    if(data.id < 10){
        return `#00${data.id}`
    } else{
        if(data.id < 100){
            return `#0${data.id}`
        }else{
            return `#${data.id}`
        }}
    };
    
    
    // const capitalize = str => str[0].toUpperCase() + str.substr(1); <- just another way to write the function
    
    
    //Questions/Ideas/Things to Not Forget
    // - How to implement search function
    // - Will I need to use different api endpoints for different info on each pokemon? Like for the pokeImage
    // - An event for toggling night mode?
    // - Can I search a pokemon, then "like or catch" instance of, to save to my pokedex?
    // - Adding in battle stats? (ATT/DEF/STAMINA)
    // - Pokemon not yet added in, show up as ? After searched, liked to add to pokedex, then name/image pop up.
    // - Background color changes to match with pokemon type?
    // - How to use the pokemon api .../1 for each pokemon, to get all the id, name, moves, etc...
    // and access those in api object to plug in their values into my element variables?