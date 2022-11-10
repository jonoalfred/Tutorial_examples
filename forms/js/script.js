// show a message with a type of the input
function showMessage (input, message, type) {
  // get the small element and set the message
  const msg = input.parentNode.querySelector('small')
  msg.innerText = message
  // update the class for the input
  input.className = type ? 'success' : 'error'
  return type
}

function displayError (input, message) {
  return showMessage(input, message, false)
}

function displaySuccess (input) {
  return showMessage(input, '', true)
}

function isEmpty (input, message) {
  if (input.value.trim() === '') {
    return displayError(input, message)
  }
  return displaySuccess(input)
}

function validateEmail (input, requiredMsg, invalidMsg) {
  // check if the value is not empty
  if (!isEmpty(input, requiredMsg)) {
    return false
  }
  // validate email format
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const email = input.value.trim()
  if (!emailRegex.test(email)) {
    return displayError(input, invalidMsg)
  }
  return true
}

const form = document.querySelector('#contact')

// These are in caps cuz they are global constants
const PROVIDE_NAME = 'Please enter your name'
const PROVIDE_EMAIL = 'Please enter your email'
const INVALID_EMAIL = 'Please enter a correct email address format'

form.addEventListener('submit', function (event) {
  // stop form submission
  event.preventDefault()

  // validate the form
  let nameValid = isEmpty(form.elements['name'], PROVIDE_NAME)
  let emailValid = validateEmail(
    form.elements['email'],
    PROVIDE_EMAIL,
    INVALID_EMAIL
  )
  // if valid, submit the form.
  if (nameValid && emailValid) {
    alert('Beep boop')
  }
})

// Another way to interact with the dom
var cellNo = document.querySelector('#cell')

cellNo.addEventListener('input', () => {

  // sets a custom validity message for the element. 
  cellNo.setCustomValidity('')

  // Returns true if an input element contains valid data.
  cellNo.checkValidity()
})

cellNo.addEventListener('invalid', () => {
  if (cellNo.value === '') {
    cellNo.setCustomValidity('Enter cell number!')
  } else {
    cellNo.setCustomValidity('Enter phone number in this format: 111-222-3333')
  }
})
