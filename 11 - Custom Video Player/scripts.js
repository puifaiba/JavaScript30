// Get our elements
const player = document.querySelector(".player")
const video = player.querySelector(".viewer")
const progress = player.querySelector(".progress")
const progressBar = player.querySelector(".progress__filled")
const toggle = player.querySelector(".toggle")
const skipButtons = player.querySelector("[data-skip]")
const ranges = player.querySelector(".player__slider")

// Build functions
function togglePlay() {
  if (video.paused) {
    // paused is a property of the video, there is no play property
    video.play()
  } else {
    video.pause()
  }
}
/* function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]()
}
*/
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚" // this = the video
  toggle.textContent = icon
}

function skip() {
  console.log(this.dataset.skip)
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value
  // console.log(this.value)
  // console.log(this.name)
}

// Hook up event listeners
video.addEventListener("click", togglePlay)
video.addEventListener("play", updateButton)
video.addEventListener("pause", updateButton)

toggle.addEventListener("click", togglePlay)
skipButtons.forEach((button) => {
  button.addEventListener("click", skip)
})
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate))
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
)
