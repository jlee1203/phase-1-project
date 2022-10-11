//DOM Elements creation
function renderPokemon(data){
const pokeDex = document.createElement('div');
const pokeCard = document.createElement('div');
    
const pokeName = document.createElement('h1');
const pokeId = document.createElement('p');
const pokeImage1 = document.createElement('img');
const pokeImage2 = document.createElement('img');
const pokeHeight = document.createElement('p');
const pokeWeight = document.createElement('p');

//Content/attributes for each newly created DOM element.
pokeName.textContent = data.name;
pokeId.textContent = data.id;
pokeImage1.src = data.sprites.front_default;
pokeImage2.src = data.sprites.back_default;
pokeHeight.textContent = data.height;
pokeWeight.textContent = data.weight;


//Appending all the correctly nested elements within each parent node. Not seen in HTML file, the created 
//elements, used js to apply dom manipulation for insertion of each element.
document.body.appendChild(pokeDex);    
pokeDex.append(pokeCard);
pokeCard.append(pokeName, pokeId, pokeImage1, pokeImage2, pokeHeight, pokeWeight);
}

const base_URL = `https://pokeapi.co/api/v2/pokemon/1`;
fetch(base_URL)
.then(resp => resp.json())
.then(data => {
    console.log(data)
    renderPokemon(data)
});  







// Constants, helper functions, URL, etc.
//const base_URL = "https://pokeapi.co/api/v2/pokemon";

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