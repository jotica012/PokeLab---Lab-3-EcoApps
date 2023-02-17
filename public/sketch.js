// Bulbasaur’s id = 1
// Charmander’s id = 4
// Squirtle’s id = 7

const pokeContainer = document.querySelector('.pokemon-container');
const card1 =  document.querySelector('#card1');
const card2 =  document.querySelector('#card2');
const card3 =  document.querySelector('#card3');


async function fetchPokemon(id) {
   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
   const data = await res.json();
   console.log(data)
   await createPokemon(data);
}

function fetchPokemons(){
    fetchPokemon(1);
    fetchPokemon(4);
    fetchPokemon(7)
}

function createPokemon (pokemon) {

    const flipCard = document.createElement('div');
    flipCard.classList.add('flip-card');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    flipCard.appendChild(cardContainer);

    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spritesContainer = document.createElement('div');
    spritesContainer.classList.add('img-container');

    const sprites = document.createElement('img');
    sprites.classList.add('img-poke');
    sprites.src = pokemon.sprites.front_shiny; // We do this so we can see the sprites from the front

    spritesContainer.appendChild(sprites);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const name =  document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    card.appendChild(spritesContainer);
    card.appendChild(number);
    card.appendChild(name);

    const cardBack = document.createElement('div');
    cardBack.classList.add('pokemon-block-back');
  //  cardBack.appendChild(backCard);



    cardContainer.appendChild(card);
    cardContainer.appendChild(cardBack);
    pokeContainer.appendChild(flipCard); 

}

function backCard(pokemon) {
    const BackContainer = document.createElement("div");
    BackContainer.classList.add("var-container");

    const varContainer = document.createElement("var-container");
    varContainer.classList.add("var-container");

    const weight =  document.createElement('p');
    weight.classList.add('weight');
    weight.textContent = pokemon.weight;

    varContainer.appendChild(weight);
    BackContainer.appendChild(varContainer); 
}



fetchPokemons();

//base_happiness:50
//capture_rate:45
//hatch_counter:20