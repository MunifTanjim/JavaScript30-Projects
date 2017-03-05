require('../stylesheets/style')

const secHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hrHand = document.querySelector('.hour-hand')

function setTime() {
  const now = new Date()
  const secs = now.getSeconds()
  const mins = now.getMinutes()
  const hrs = now.getHours()

  const secDeg = ((secs / 60) * 360) + 90
  const minDeg = ((mins / 60) * 360) + 90
  const hrDeg = ((hrs / 12) * 360) + 90

  if(secDeg===90) {
    secHand.style.transform = `rotate(${secDeg}deg)`
    secHand.style.transition = `none`
  } else {
    secHand.style.transform = `rotate(${secDeg}deg)`
    secHand.style.transition = `all .05s`
  }

  minHand.style.transform = `rotate(${minDeg}deg)`
  hrHand.style.transform = `rotate(${hrDeg}deg)`
}

setInterval(setTime,1000)
