//DOM Elements creation
function renderPokemon(data){
const pokeDex = document.createElement('div');
const pokeCard = document.createElement('div');
    
const pokeName = document.createElement('h1');
const pokeId = document.createElement('p');
const pokeFrontImage = document.createElement('img');
const pokeBackImage = document.createElement('img');
const pokeTypes = document.createElement('p');
const pokeHeight = document.createElement('p');
const pokeWeight = document.createElement('p');


//Content/attributes for each newly created DOM element.
pokeName.textContent = capitalizePokemonName(data.name);
pokeId.textContent = pokemonId(data);
pokeFrontImage.src = data.sprites.front_default;
pokeBackImage.src = data.sprites.back_default;
pokeHeight.textContent = `Height: ${data.height} m`;
pokeWeight.textContent = `Weight: ${data.weight} kg`;
pokeTypes.textContent = data.types.map((type) => type.type.name).join(', ');

//Appending all the correctly nested elements within each parent node. Not seen in HTML file, the created 
//elements, used js to apply dom manipulation for insertion of each element.
document.body.appendChild(pokeDex);    
pokeDex.append(pokeCard);
pokeCard.append(pokeName, pokeTypes, pokeId, pokeFrontImage, pokeBackImage, pokeHeight, pokeWeight);
}


// const capitalize = str => str[0].toUpperCase() + str.substr(1);

function fetchingAllPokemon(){
    for (i = 1; i < 900; i++){
        const base_URL = `https://pokeapi.co/api/v2/pokemon/${i}`;
        fetch(base_URL)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                renderPokemon(data)
        }); 
    }
}

fetchingAllPokemon();


// Constants, helper functions, URL, etc.
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
}
// const capitalize = str => str[0].toUpperCase() + str.substr(1); <- just another way to write the function


//The callback functions that will preform what I want for the event listeners.


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