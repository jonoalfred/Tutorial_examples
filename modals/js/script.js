





// Get the modal by using the class name and placed inside variable called modal
var modal = document.getElementById('exampleModal')

// Get the button that opens the modal and placed inside variable called btn
var btn = document.getElementById('button')

// Get the <span> element that exits the modal and placed inside variable called span
var span = document.getElementsByClassName('exit')[0]

// When the user clicks on the button, set the display property is set to 'block' previously set to none - refer to css class modal
btn.onclick = function () {
  modal.style.display = 'block'
}

// When the user clicks on <span> (x), set the display property to none, no longer show when closing the modal
span.onclick = function () {
  modal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, set the display property to none in order to close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}
