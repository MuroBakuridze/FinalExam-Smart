let btn = document.getElementById('btn')
var leftNav = document.getElementById('leftnav')

let navCallFunc = function () {
  leftNav.classList.toggle("show")
}


btn.addEventListener('click', navCallFunc);

/////////////////////////////

let downArrow = document.getElementById('down-arrow')
let popUp = document.getElementById('pop')

let popWindowCall = function () {
    popUp.classList.toggle('scale')
}
 downArrow.addEventListener('click', popWindowCall)


//////////////// modal ////////////////
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


// - pagination js - //

(function() {
  "use strict";
  
  
  function Pagination() {
    
    const resp = fetch("https://raw.githubusercontent.com/otariterterashvili/smartacademy-front/81addd9759f7c1cfb220f10d7bf74d861dbb85da/tasks.json")

  resp.then(function (response) {
    return response.json()
  }).then(function (data) {
     
  data.map(function(item) {        
     objJson.push({ 
          adName :item.id,
          adTitle : item.title,
          adCompleted: item.completed
        });
  })
  console.log(objJson)
  })
  
     const objJson = [
        {adName: "1",
        adTitle : "um debitis quis accusamus",
        adCompleted: "false"},
        {adName: "1",
        adTitle : "nihil placeat corporiss  accusamus",
        adCompleted: "true"},
        {adName: "1",
        adTitle : "vel voluptatem repellat nihil placeat corporiss",
        adCompleted: "false"},
        {adName: "1",
        adTitle : "sit reprehenderit omnis quia",
        adCompleted: "true"},
        {adName: "1",
        adTitle : "distinctio exercitationem ab doloribus",
        adCompleted: "true"},
        {adName: "1",
        adTitle : "qui labore est occaecati recusandae aliquid quam",
        adCompleted: "false"},
        {adName: "1",
        adTitle : "et sequi qui architecto ut adipisci",
        adCompleted: "true"},
        {adName: "1",
        adTitle : "odit optio omnis qui sunt",
        adCompleted: "false"},
        {adName: "1",
        adTitle : "doloremque aut dolores quidem fuga qui nulla",
        adCompleted: "true"},
        {adName: "1",
        adTitle : "voluptas consequatur qui ut quia magnam nemo esse",
        adCompleted: "true"},


    ];

    
    const prevButton = document.getElementById('button_prev');
    const nextButton = document.getElementById('button_next');
    const clickPageNumber = document.querySelectorAll('clickPageNumber');
    
    let current_page = 1;
    let records_per_page = 10;
    
    this.init = function() {
        changePage(1);
        pageNumbers();
        selectedPage();
        clickPage();
        addEventListeners();
   }
    
    let addEventListeners = function() {
        prevButton.addEventListener('click', prevPage);
        nextButton.addEventListener('click', nextPage);   
    }
          
    let selectedPage = function() {
        let page_number = document.getElementById('page_number').getElementsByClassName('clickPageNumber'); 
        for (let i = 0; i < page_number.length; i++) {
            if (i == current_page - 1) {
                page_number[i].style.opacity = "1.0";
            } 
            else {
                page_number[i].style.opacity = "0.5";
            }
        }   
    }  
    
    let checkButtonOpacity = function() {
      current_page == 1 ? prevButton.classList.add('opacity') : prevButton.classList.remove('opacity');
      current_page == numPages() ? nextButton.classList.add('opacity') : nextButton.classList.remove('opacity');
    }

    let changePage = function(page) {
        const listingTable = document.getElementById('listingTable');

        if (page < 1) {
            page = 1;
        } 
        if (page > (numPages() -1)) {
            page = numPages();
        }
     
        listingTable.innerHTML = "";

        for(var i = (page -1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
            listingTable.innerHTML += "<div class='mro'><div class='userId'>" + objJson[i].adName + "</div>" +
             "<div class='userTitle'>" + objJson[i].adTitle + "</div>"+
            "<div class='userComp'>" + objJson[i].adCompleted + "</div></div>";
        }
        checkButtonOpacity();
        selectedPage();
    }

    let prevPage = function() {
        if(current_page > 1) {
            current_page--;
            changePage(current_page);
        }
    }

    let nextPage = function() {
        if(current_page < numPages()) {
            current_page++;
            changePage(current_page);
        } 
    }

    let clickPage = function() {
        document.addEventListener('click', function(e) {
            if(e.target.nodeName == "SPAN" && e.target.classList.contains("clickPageNumber")) {
                current_page = e.target.textContent;
                changePage(current_page);
            }
        });
    }

    let pageNumbers = function() {
        let pageNumber = document.getElementById('page_number');
            pageNumber.innerHTML = "";

        for(let i = 1; i < numPages() + 5; i++) {
            pageNumber.innerHTML += "<span class='clickPageNumber'>" + i + "</span>";
        }
    }

    let numPages = function() {
        return Math.ceil(objJson.length / records_per_page);  
    }
 }
let pagination = new Pagination();
pagination.init();
})();


