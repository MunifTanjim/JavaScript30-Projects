// require('../stylesheets/style')

let pressed = []
const secretCode = '42'

window.cornify_count = 0

window.addEventListener('keyup', (e) => {
  pressed.push(e.key)
  pressed = pressed.slice(-secretCode.length)
  pressed.join('')===secretCode && window.cornify_add()
})
