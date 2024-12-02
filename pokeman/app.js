console.log("I HATE JAVASCRIPT I WANT TO WIPE IT OFF THE FACE OG THE EARTH RAHHHHHHHHHHHHH")

const container = document.querySelector('#container')

for (i = 1; i<= 1000; i++) {
    const newimg = document.createElement('img')
    newimg.src = '/media/pokemonimage.jpg'
    newimg.style = 'width:14.28%;'
    container.appendChild(newimg)
}
function buttonClickHandler(){
    console.log("Detected click on 'button'")
    
}
console.log(newimg)