//DOM Elements creation
// function renderPokemon(){
// const pokeDex = document.createElement('div');
// const pokeCard = document.createElement('div');
    
// const pokeName = document.createElement('h1');
// const pokeId = document.createElement('div');
// const pokeImage = document.createElement('div');
// const pokeTypeOne = document.createElement('div');
// const pokeTypeTwo = document.createElement('div');
// const pokeHeight = document.createElement('div');
// const pokeWeight = document.createElement('div');

//Content/attributes for each newly created DOM element.






//Appending all the correctly nested elements within each parent node. Not seen in HTML file, the created 
//elements, used js to apply dom manipulation for insertion of each element.
// document.body.appendChild(pokeDex);    
// pokeDex.append(pokeCard);
// pokeCard.append(pokeName, pokeId, pokeImage, pokeTypeOne, pokeTypeTwo, pokeHeight, pokeWeight);
// }




        const base_URL = `https://pokeapi.co/api/v2/pokemon/ditto`;
        fetch(base_URL)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            
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