const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const userName = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmed = document.getElementById('confirm')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const signup = document.getElementById('sign-up')
const passError = document.getElementById('pass-error')
const confirmError = document.getElementById('confirm-error')

form.addEventListener('submit', (e) => {
  let messages = []

  if (password.value === '' || password.value == null) {
    messages.push('Password is required')
    password.classList.add("error-ms")
    passError.innerText = messages
  }

  if (password.value.length >0 && password.value.length <= 8) {
    messages.push('Password must be longer than 8 characters')
    password.classList.add("error-ms")
    passError.innerText = messages
    clearValue()
  }
  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
    clearValue()
    password.classList.add("error-ms")
    passError.innerText = messages
  }
  if (password.value !== confirmed.value) {
    messages.push('Password does not match')
    password.classList.add("error-ms")
    confirmed.classList.add("error-ms")
    passError.innerText = messages
    confirmError.innerText = messages
  }
  if (messages.length > 0) {
    e.preventDefault()
    // errorElement.innerText = messages.join(', ')
 
  }
})

function clearValue() {
  password.value = ''
  confirmed.value = ''
}



signup.addEventListener('click', (e)=>{
  if((firstName.value !== '' && lastName.value !== '') && (userName.value !== '' && email.value !== '') && 
  (password.value === confirmed.value) && (password.value.length >= 8)){
    e.preventDefault()
    password.classList.remove("error-ms")
    confirmed.classList.remove("error-ms")
    passError.innerText = ""
    confirmError.innerText = ""
    window.location = "./main.html"
  }
  })
