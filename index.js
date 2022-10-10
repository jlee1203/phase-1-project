// DOM Elements creation
const pokeDex = document.createElement('div');
const pokeCard = document.createElement('div');

const pokeName = document.createElement('h2');
const pokeId = document.createElement('id');
const pokeImage = document.createElement('img');
const pokeType = document.createElement('h3');
const pokeHeight = document.createElement('id');
const pokeWeight = document.createElement('id');



// Constants, helper functions, URL, etc.
const base_URL = "https://pokeapi.co/api/v2/";

//The callback functions that will preform what I want for the event listeners.


//Questions/Ideas/Things to Not Forget
// - How to implement search function
// - Will I need to use different api endpoints for different info on each pokemon?
// - An event for toggling night mode?
// - Can I search a pokemon, then "like or catch" instance of, to save to my pokedex?