require('../stylesheets/style')

/* Elements */
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

/* Handlers */
const togglePlay = () => (video.paused ? video.play() : video.pause())

const updateButton = () => (
  toggle.textContent = video.paused ? '►' : '❚❚'
)

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value
}

const handleProgress = () => (
  progressBar.style.flexBasis = `${video.currentTime/video.duration*100}%`
)

const scrub = (e) => (
  video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration
)


/* Event Listeners */
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)

skipButtons.forEach(btn => btn.addEventListener('click', skip))

ranges.forEach(range => {
  range.addEventListener('click', handleRangeUpdate)
  range.addEventListener('change', handleRangeUpdate)
  range.addEventListener('mousemove', handleRangeUpdate)
})

let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown',() => mousedown = true)
progress.addEventListener('mouseup',() => mousedown = false)
