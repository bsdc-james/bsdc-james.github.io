console.log("I HATE JAVASCRIPT IT SHOULD BE WIPED OFF THFACE OF THE REATHC REAHGGGGG")

let switchbob = false;

function bobClickHandler(){
    console.log("Detected click on 'bob'")
    if (switchbob){
        bob.innerHTML = `<h1 id="text" class="text">bob is now in minecraft<br>what have you done</h1>
        <img src="/media/bobminecraft.png" alt="" />`;
    } else {
        bob.innerHTML = `<h1 id="text" class="text">bob is going to cry<br>be nice</h1>
        <img src="/media/depressobob.png" alt="" />`;
    }
    switchbob = !switchbob;
}

var bob = document.getElementById("box")
console.log(bob.innerHTML)
bob.addEventListener('click', bobClickHandler)