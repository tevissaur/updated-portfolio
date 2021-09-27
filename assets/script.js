








addEventListener('wheel', (e) => {
    console.log(e.deltaY)
    if (e.deltaY > 0) {
        console.log('scroll down')

    } else{
        console.log('scroll up')
    }
})
