let btn = document.getElementById('btn')
var leftNav = document.getElementById('leftnav')

let navCallFunc = function () {
  leftNav.classList.toggle("show")
}


btn.addEventListener('click', navCallFunc)


fetch("https://jsonplaceholder.typicode.com/todos").then(
  res=>{
    res.json().then(
      data=>{
        console.log(data)
        if(data.length > 0){
          var temp = "";

          //...start for loop

          data.forEach((u)=>{
            temp += "<tr>"
            temp += "<td>" + u.id+"</td>"
            temp += "<td>" + u.title+"</td>"
            temp += "<td>" + u.completed+"</td>"
          })

          //...close for loop
          document.getElementById("data").innerHTML = temp;
        }
      }
    )
  }
)