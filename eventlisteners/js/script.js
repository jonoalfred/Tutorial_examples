// Alternative methods

// const areaListener = new AbortController()

// const addMouseTrail = function (e) {
//   document.addEventListener('mousemove', enableMouseMovement(e)), areaListener
// }

// const enableMouseMovement = function (e) {
//   let body = document.querySelector('body')
//   let x = e.offsetX
//   let y = e.offsetY
//   let circle = document.createElement('span')
//   circle.style.left = x + 'px'
//   circle.style.top = y + 'px'
//   let size = Math.random() * 100
//   circle.style.width = 20 + size + 'px'
//   circle.style.height = 20 + size + 'px'
//   body.appendChild(circle)
//   setTimeout(function () {
//     circle.remove()
//   }, 1800)
// }

// document.addEventListener('mousedown', e => addMouseTrail(e), true)

// document.addEventListener('click', () => areaListener.abort(), true,)

// document.addEventListener(
//   'mousemove',
//   e => enableMouseMovement(e),
//   areaListener
// )

function enableMouseTracking (e) {
  // the logical operator || refers to OR, which ever is true will be returned
  e = e || window.event
  // Mouse events
  let body = document.querySelector('body')
  let x = e.offsetX
  let y = e.offsetY
  let circle = document.createElement('span')
  circle.style.left = x + 'px'
  circle.style.top = y + 'px'
  let size = Math.random() * 100
  circle.style.width = 20 + size + 'px'
  circle.style.height = 20 + size + 'px'
  body.appendChild(circle)
  setTimeout(function () {
    circle.remove()
  }, 1800)
}

// set mouseclicked is initially set to false
let mouseclicked = false

// on mouse down set mouseclicked to true
document.addEventListener('mousedown', () => (mouseclicked = true))

// on mouse down set mouseclicked to false
document.addEventListener('mouseup', () => (mouseclicked = false))

// while moving check what the state(bool in this case) of variable mouseclicked is and choose which function to load for mousemove
document.addEventListener('mousemove', () =>
  mouseclicked
    ? document.addEventListener('mousemove', enableMouseTracking)
    : document.removeEventListener('mousemove', enableMouseTracking)
)
