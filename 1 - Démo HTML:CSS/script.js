/* document
  .getElementById('animate-btn') // Récupère le bouton avec l'id 'animate-btn'
  .addEventListener('click', function () {
    // Exécute cette fonction anonyme au clic sur le bouton
    document.getElementById('title').classList.toggle('bounce') // Ajoute ou retire la classe 'bouce' sur l'élément à l'id 'title'
  })

let firstName = 'Chris'
let lastName = 'Chevalier'

console.log('Bienvenue ' + firstName + ' ' + lastName + ' !')
console.log(`Bienvenue ${firstName} ${lastName} !`)

let cosmo = {
  name: 'Cosmo',
  'last-name': 'Chevalier',
  age: 2
}

for (let key in cosmo) {
  console.log(`${key} : ${cosmo[key]}`)
}
 */

const h1 = document.querySelector('header h1')
const navbarItems = document.querySelectorAll('header nav ul.navbar li')
/* console.log(h1)
console.log(navbarItems) */
h1.innerHTML = '<i>Les Pokémon</i>'
h1.style.color = 'chartreuse'

const div = document.createElement('div') // <div></div>
const p = document.createElement('p') // <p></p>
const img = document.createElement('img') // <img></img>

document.querySelector('#ronflex').addEventListener('click', () => {
  displayAquali()
})
/* document.querySelector('#ronflex').addEventListener('mouseup', () => {
  div.removeChild(p)
  div.removeChild(img)
}) */

function displayAquali () {
  p.textContent =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt blanditiis cumque similique harum reiciendis dolorum sequi ipsa pariatur accusantium laboriosam, vitae nihil totam ducimus quis! Quidem nemo tempore quam ipsa.'

  img.src =
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/134.png'
  img.alt = 'Aquali'

  div.appendChild(p)
  div.appendChild(img)
  document.querySelector('main').appendChild(div)

  //div.removeChild(p)
}

/* document.write ("<h2>COUCOU 🚀</h2>") */