require('../stylesheets/style')

const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const clearAllButton = document.querySelector('button.clear_all')
const checkAllButton = document.querySelector('button.check_all')
const uncheckAllButton = document.querySelector('button.uncheck_all')

const items = JSON.parse(localStorage.getItem('items')) || []

const populateList = (plates = [], platesList) => {
  platesList.innerHTML = plates
    .map(
      (plate, i) =>
        `<li><input type='checkbox' data-index=${i} id='item${i}' ${
          plate.done ? 'checked' : ''
        } /><label for='item${i}'>${plate.text}</label></li>`
    )
    .join('')
}

const update = () => {
  populateList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items))
}

addItems.addEventListener('submit', e => {
  e.preventDefault()
  let text = e.target.querySelector('[name=item]').value
  let item = {
    text,
    done: false
  }
  items.push(item)
  update()
  e.target.reset()
})

itemsList.addEventListener('click', e => {
  if (!e.target.matches('input')) return
  let index = e.target.dataset.index
  items[index].done = !items[index].done
  update()
})

clearAllButton.addEventListener('click', () => {
  while (items.length) items.pop()
  update()
})

checkAllButton.addEventListener('click', () => {
  items.forEach(item => (item.done = true))
  update()
})

uncheckAllButton.addEventListener('click', () => {
  items.forEach(item => (item.done = false))
  update()
})

populateList(items, itemsList)
