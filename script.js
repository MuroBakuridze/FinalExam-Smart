const username = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const signup = document.getElementById('sign-up')
const login = document.getElementById('login')

// let log = function () {
//   window.location.href="./main.html"}

  // let log = login.addEventListener('submit', () =>{
  //   window.location.href="./main.html"
  // })

function clearValue() {
    password.value = ''
  }
  
signup.onclick = function () {
    window.location.href="./signup.html"
  }

  

form.addEventListener('submit', (e) => {
  let messages = []
 

  if (username.value === '' || username.value == null) {
    messages.push('Username is required')
  }

  if (password.value.length <= 8) {
    messages.push('Password must be longer than 8 characters')
    clearValue()
  }
  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
    clearValue()
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

  // if(messages.length <= 0 || messages.length == null){
  //   e.preventDefault()
  //   login.onclick = log
  //   console.log('shet')
  // }
  if (password.value.length >=8 && password.value.length <=20){
    
    login.addEventListener('click', () =>{
      location.href="./main.html"
    })
    // login.onclick = log
    e.preventDefault()
  }

})



