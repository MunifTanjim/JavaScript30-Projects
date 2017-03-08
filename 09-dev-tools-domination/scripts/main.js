// require('../stylesheets/style')

function ready(callback) {
  if (document.readyState != 'loading')
    callback()
  else
    document.addEventListener('DOMContentLoaded', callback)
}

ready(() => {
  const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }]

  const makeGreen = () => {
    const p = document.querySelector('p')
    p.style.color = '#BADA55'
    p.style.fontSize = '50px'
  }

  window.dev = { makeGreen: makeGreen }

  // clearing
  console.clear()

  // Regular
  console.log('Hello JS!')

  // Interpolated
  let poop = '🚀'
  console.log(`I am a ${poop} string!`)

  // Styled
  console.log('%cHey There Stranger!', 'font-size: 2em; color: red')

  // warning!
  console.warn('Oh Crap!')

  // Error :|
  console.error('Shit just hit the fan!')

  // Info
  console.info('It is just info...')

  // Testing
  console.assert(2+2===4, 'The world has gone insane!')

  // Viewing DOM Elements
  const p = document.querySelector('p')
  console.log(p)
  console.dir(p)

  // Grouping together
  dogs.forEach(dog => {
    console.groupCollapsed(dog.name)
      console.log(`This is ${dog.name}.`)
      console.log(`${dog.name} is ${dog.age} years old.`)
    console.groupEnd(dog.name)
  })

  // counting
  console.count('You')
  console.count('Me')
  console.count('You')
  console.count('Me')
  console.count('You')

  // timing
  console.time('fetching GitHub profile')
  fetch('https://api.github.com/users/MunifTanjim')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching GitHub profile')
      console.log(data)
    })

  // table
  console.table(dogs)
})
