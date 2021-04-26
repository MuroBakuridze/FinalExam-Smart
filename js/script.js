const username = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const signup = document.getElementById('sign-up')
const login = document.getElementById('login')
const userError = document.getElementById('user-error')
const passError = document.getElementById('pass-error')


function clearValue() {
    password.value = ''
  }
  
signup.onclick = function () {
    window.location.href="./signup.html"
  }


form.addEventListener('submit', (e) => {
  let messages = []
  let userMessages = []
 

  if (username.value === '' || username.value == null) {
    userMessages.push('Username is required')
    username.classList.add("error-ms")
    userError.innerText = userMessages
  }else{
    username.classList.remove("error-ms")
    userError.innerText = ""
  }
  if (password.value === '' || password.value == null) {
    messages.push('Password is required')
    password.classList.add("error-ms")
    passError.innerText = messages
  }

  if (password.value.length >0 && password.value.length <= 8) {
    messages.push('Password must be longer than 8 characters')
    clearValue()
    password.classList.add("error-ms")
    passError.innerText = messages
  }
  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
    clearValue()
    password.classList.add("error-ms")
    passError.innerText = messages
  }
  if (password.value.length >= 8 && password.value.length <=20){
    passError.innerText = ""
    password.classList.remove("error-ms")
  }

  if ((messages.length > 0) || (userMessages.length > 0)) {
    e.preventDefault()
    // errorElement.innerText = messages.join(', ')
  }

  
})


function redirect(){
  window.location = "./main.html"
}

login.addEventListener('click', (e)=>{
  if(username.value !== '' && password.value.length >= 8 && password.value.length <=20){
    password.classList.remove("error-ms")
    passError.innerText = ""
    e.preventDefault()
    window.location = "./main.html"
  }
})