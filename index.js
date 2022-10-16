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
pokeform.addEventListener('submit', searchPokemon);

//Appending all the correctly nested elements within each parent node. Not seen in HTML file, the created 
//elements, used js to apply dom manipulation for insertion of each element.
pokeDex[0].append(pokeCard);
pokeCard.append(pokeName, pokeTypes, pokeId, pokeFrontImage, pokeHeight, pokeWeight, infoButton);
}
   


//Made the function that will have all the elements and their information for the pokemon card that will pop up.
function displayPokemonCard(data){
const pokeCardInfo = document.createElement('div');

const pokeImage = document.createElement('img');
const pokeAttack = document.createElement('p');
const pokeDefense = document.createElement('p');
const pokeHp = document.createElement('p');
const pokeMoves1 = document.createElement('p');
const pokeMoves2 = document.createElement('p');

//Adding id's/classes to DOM elements
pokeCardInfo.className = "pokecard-info";
pokeImage.id = "poke-image";
pokeAttack.id = "poke-attack";
pokeDefense.id = "poke-defense";
pokeHp.id = "poke-hp";
pokeMoves1.id = "poke-move-1";
pokeMoves2.id = "poke-move-2";

pokeImage.src = data.sprites.front_shiny;
pokeImage.alt = "The Shiny Version!";
pokeAttack.textContent = `ATT: ${data.stats[1].base_stat}`;
pokeDefense.textContent = `DEF: ${data.stats[2].base_stat}`;
pokeHp.textContent = `HP: ${data.stats[0].base_stat}`;
pokeMoves1.textContent = data.moves[0].move.name;
pokeMoves2.textContent = data.moves[5].move.name;

document.body.append(pokeCardInfo);
pokeCardInfo.append(pokeImage, pokeAttack, pokeDefense, pokeHp, pokeMoves1, pokeMoves2);
}




// const capitalize = str => str[0].toUpperCase() + str.substr(1);

 async function fetchingAllPokemon(){
    for (i = 1; i < 30; i++){
        const base_URL = `https://pokeapi.co/api/v2/pokemon/${i}`;
        await fetch(base_URL)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                renderPokemon(data);
                displayPokemonCard(data);
        }).catch(error => {
            console.log(`My error: ${error}`)
        });
    }
}

fetchingAllPokemon();


//Functions
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



function clickEventCallback(){
    console.log("I was clicked!");

}

function searchPokemon(e){
    e.preventDefault();
    
    console.log(searchPokemon);
    
}
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