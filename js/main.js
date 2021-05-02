const body = document.querySelector('body');
const btnHamburger = document.querySelector('#btnHamburger');
const nav = document.querySelector('.nav');
const fadeElems = document.querySelectorAll('.has-fade');
const links = document.querySelectorAll('.link');
const agencyCard = document.querySelector('.agency-work');
const tictactoeCard = document.querySelector('.tictactoe');
const card = document.querySelector('.card');


btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');
    
    if(nav.classList.contains('open')){ // Close Hamburger Menu
        nav.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }

    else{ // Open Hamburger Menu
        nav.classList.add('open');
        body.classList.add('noscroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }

    links.forEach(item => {item.addEventListener('click', function(){
        console.log('click link');
    
        nav.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    })
    });
});

// agencyCard.addEventListener('mousemove', function(e) {
//     let xAxis = (window.innerWidth / 2 - e.pageX) / 80;
//     let yAxis = (window.innerHeight / 2  - e.pageY) / 300;
//     agencyCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
//   });

//   tictactoeCard.addEventListener('mousemove', function(e) {
//     let xAxis = (window.innerWidth / 2 - e.pageX) / 80;
//     let yAxis = (window.innerHeight / 2  - e.pageY) / 300;
//     tictactoeCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
//   });

  card.addEventListener('mousemove', function(e) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2  - e.pageY) / 800;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });