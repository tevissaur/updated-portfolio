

let mainCircle = document.getElementById('nav-circle-0')
let sections = document.querySelectorAll('section');
let works = document.querySelectorAll('.work-container>*')
let navCircles = document.querySelectorAll('.circle')
let firstNavCircle = document.getElementById('nav-circle-1')
let middleNavCircle = document.getElementById('nav-circle-2')
let lastNavCircle = document.getElementById('nav-circle-3')
let aboutText = document.getElementById('about-text')
let workText = document.getElementById('work-text')
let contactText = document.getElementById('contact-text')
let navText = document.querySelectorAll('.link-text')

var
  carousel = document.querySelector('.myCarousel'),
  figure = carousel.querySelector('figure'),
  nav = carousel.querySelector('nav'),
  numImages = figure.childElementCount,
  theta =  2 * Math.PI / numImages,
  currImage = 0
;
  
nav.addEventListener('click', onClick, true);

function onClick(e) {
  e.stopPropagation();
  
  var t = e.target;
  if (t.tagName.toUpperCase() != 'BUTTON')
    return;
  
  if (t.classList.contains('next')) {
    currImage++;
  }
  else {
    currImage--;
  }
  
  figure.style.transform = `rotateY(${currImage * -theta}rad)`;
}
let slideUp = {
    opacity: 0,
    delay: 50,
    duration: 700,
    reset: true
};

ScrollReveal().reveal(sections, slideUp);





// firstNavCircle.addEventListener('mouseenter', event => {
//     aboutText.classList.remove('hidden')
// })
// firstNavCircle.addEventListener('mouseleave', event => {
//     aboutText.classList.add('hidden')
// })

// middleNavCircle.addEventListener('mouseover', event => {
//     workText.classList.remove('hidden')
// })
// middleNavCircle.addEventListener('mouseleave', event => {
//     workText.classList.add('hidden')

// })

// lastNavCircle.addEventListener('mouseover', event => {
//     contactText.classList.remove('hidden')
// })

// lastNavCircle.addEventListener('mouseleave', event => {
//     contactText.classList.add('hidden')
// })








// function distributeFields(deg, piDiv) {
//     deg = deg || 0;
//     let radius = 180;
//     let circles = document.querySelectorAll('.circle'), //using queryselector instead of $ to select items 

//         width = mainCircle.offsetWidth;  //offsetWidth gives the width of the container
//     height = mainCircle.offsetHeight;
//     angle = deg || Math.PI * 3.5;
//     step = (Math.PI / piDiv) / circles.length;
//     console.log(width, height, circles)

//     //using forEach loop on a NodeList instead of a Jquery .each, 
//     //so we can now use "field" as an iterator instead of $(this)

//     circles.forEach((circle) => {
//         let x = Math.round(width / 2 + radius * Math.cos(angle) - circle.offsetHeight / 2);
//         let y = Math.round(height / 2 + radius * Math.sin(angle) - circle.offsetWidth / 2);
//         console.log(x, y)
//         circle.style.left = x + 'px';  //adding inline style to the document (field)
//         circle.style.top = y + 'px';

//         angle += step;
//     })
// }

// function drawNavBar(event) {
//     mainCircle.style.width = `250px`
//     mainCircle.style.height = `250px`
//     for (let i = 0; i < 3; i++) {
//         let navCircle = document.createElement('div')
//         navCircle.style.width = `70px`
//         navCircle.style.height = `70px`
//         navCircle.classList.add('rounded-circle', 'circle')
//         navCircle.id = `nav-circle-${i + 1}`
//         let navLink = document.createElement('a')
//         switch (navCircle.id) {
//             case 'nav-circle-1':
//                 navLink.href = '#contact'
//                 navCircle.appendChild(navLink)
//                 break
//             case 'nav-circle-2':
//                 navLink.href = '#work'
//                 navCircle.appendChild(navLink)

//                 break
//             case 'nav-circle-3':
//                 navLink.href = '#bio'
//                 navCircle.appendChild(navLink)


//         }
//         mainCircle.appendChild(navCircle)

//     }
// }

// addEventListener('load', (event) => {
    // if (innerWidth <= 425) {
    //     console.log(innerWidth)
    //     drawNavBar(event)
    //     distributeFields(1.06, 2);
    // } else {

    //     drawNavBar(event)
    //     distributeFields(0.87, 1.45);
    // }
        // drawNavBar(event)
        // distributeFields(0.86, 1.45);
// })





// addEventListener('wheel', (e) => {
//     console.log(e.deltaY)
//     if (e.deltaY < 0) {
//         console.log('scroll up')
//         console.log(innerWidth)
//     } else {
//         console.log('scroll down')
//         console.log(innerHeight)
//     }
// })
