

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
let socialsButtons = document.getElementById('socials').children
let openSocials = socialsButtons[0]
let closeSocials = socialsButtons[1]

console.log(socialsButtons)

var
  carousel = document.querySelector('.myCarousel'),
  figure = carousel.querySelector('figure'),
  nav = carousel.querySelector('nav'),
  numImages = figure.childElementCount,
  theta = 2 * Math.PI / numImages,
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

const showSocials = () => {
  for (let button of socialsButtons) {
    button.classList.toggle('hidden')
    console.log(button)
  }
}
openSocials.addEventListener('click', showSocials)
closeSocials.addEventListener('click', showSocials)

let slideUp = {
  opacity: 0,
  delay: 50,
  duration: 700,
  reset: true
};

ScrollReveal().reveal(sections, slideUp);
