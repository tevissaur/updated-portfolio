let mainCircle = document.getElementById('nav-circle-0')

function updateNavBar() {

}
function distributeFields(deg) {
    deg = deg || 0;
    let radius = 180;
    let circles = document.querySelectorAll('.circle'), //using queryselector instead of $ to select items 

        width = mainCircle.offsetWidth;  //offsetWidth gives the width of the container
        height = mainCircle.offsetHeight;
        angle = deg || Math.PI * 3.5;
        step = (Math.PI / 1.4) / circles.length;
    console.log(width, height, circles)

    //using forEach loop on a NodeList instead of a Jquery .each, 
    //so we can now use "field" as an iterator instead of $(this)

    circles.forEach((circle) => {
        let x = Math.round(width / 2 + radius * Math.cos(angle) - circle.offsetHeight / 2);
        let y = Math.round(height / 2 + radius * Math.sin(angle) - circle.offsetWidth / 2);
        console.log(x, y)
        circle.style.left = x + 'px';  //adding inline style to the document (field)
        circle.style.top = y + 'px';

        angle += step;
    })
}

function drawNavBar(event) {
    mainCircle.style.width = `250px`
    mainCircle.style.height = `250px`
    for (let i = 0; i < 3; i++) {
        let navCircle = document.createElement('div')
        navCircle.style.width = `70px`
        navCircle.style.height = `70px`
        navCircle.classList.add('rounded-circle', 'circle')
        navCircle.id = `nav-circle-${i + 1}`
        switch (navCircle.id) {
            case 'nav-circle-1':
                
                break
            case 'nav-circle-2':

                break
            case 'nav-circle-3':

                break
            case 'nav-circle-4':

                break
        }
        mainCircle.appendChild(navCircle)
        let navLink = document.createElement('a')

    }
}

addEventListener('load', (event) => {
    if (innerWidth <= 425 ) {
        console.log(innerWidth)
        drawNavBar(event)
    } else {
        
        drawNavBar(event)
        distributeFields(0.8);
    }
})





addEventListener('wheel', (e) => {
    console.log(e.deltaY)
    if (e.deltaY < 0) {
        console.log('scroll up')
        console.log(innerWidth)
    } else {
        console.log('scroll down')
        console.log(innerHeight)
    }
})
