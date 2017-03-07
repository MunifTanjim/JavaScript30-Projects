require('../stylesheets/style')

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const places = []

fetch(endpoint).then(blob => blob.json()).then(data => places.push(...data))

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
}

function findMatches(query, places) {
  const re = new RegExp(query, 'gi')
  return places.filter(place => (place.city.match(re) || place.state.match(re)))
}

function displayMatches() {
  const matchedPlaces = findMatches(this.value, places)
  const re = new RegExp(this.value, 'gi')

  const html = matchedPlaces.map(place => {
    const cityName = place.city.replace(re, `<span class='hl'>${this.value}</span>`)
    const stateName = place.state.replace(re, `<span class='hl'>${this.value}</span>`)

    return `<li>
      <span class='name'>${cityName}, ${stateName}</span>
      <span class='population'>${numberWithCommas(place.population)}</span>
    </li>`
  }).join('')
  suggestions.innerHTML = html
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)
