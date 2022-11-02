
var modal = document.getElementById('botModal')

var btn = document.getElementById('button')

var span = document.getElementsByClassName('exit')[0]

btn.onclick = function () {
  modal.style.display = 'block'
}

span.onclick = function () {
  modal.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}
