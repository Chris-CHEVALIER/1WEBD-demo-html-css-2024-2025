fetch('https://pokeapi.co/api/v2/pokemon?limit=1&offset=0').then(response =>
  response.json().then(data => {
    const pokemons = data.results

    pokemons.forEach(pokemon => {
      fetch(pokemon.url).then(response => {
        response.json().then(pokemonData => {
            console.log(pokemonData);
            
          const ul = document.getElementById('pokemon-container')
          const li = document.createElement('li')
          const img = document.createElement('img')
          img.src =
            pokemonData.sprites.other['official-artwork'].front_default
          img.alt = pokemonData.name
          img.style.width = "350px"
          img.style.height = "100px"
          li.textContent = pokemonData.name
          ul.appendChild(li)
          ul.appendChild(img)
        })
      })
    })
  })
)
