const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const userName = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmed = document.getElementById('confirm')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const signup = document.getElementById('sign-up')

form.addEventListener('submit', (e) => {
  let messages = []
  if (password.value.length <= 2) {
    messages.push('Password must be longer than 8 characters')
    clearValue()
  }
  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
    clearValue()
  }
  if (password.value !== confirmed.value) {
    messages.push('Password does not match')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }else{
    e.preventDefault()
    signup.addEventListener('click', () => {
      window.location.href="./main.html"
    })
  }
})

function clearValue() {
  password.value = ''
  confirmed.value = ''
}




