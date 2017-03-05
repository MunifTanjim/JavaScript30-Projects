require('../stylesheets/style')

const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
  let suffix = this.dataset.suffix
  let newValue = this.value + suffix

  document.documentElement.style.setProperty(`--${this.name}`, newValue)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
