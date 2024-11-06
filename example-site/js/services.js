var PIOpen = false
var PIIOpen = false
var PIIIOpen = false
var PVIOpen = false 

console.log("'PIOpen' declared as",PIOpen)
console.log("'PIIOpen' declared as",PIIOpen)
console.log("'PIIIOpen' declared as",PIIIOpen)
console.log("'PVIOpen' declared as",PVIOpen)


function homePageClickHandler(){
    console.log("Detected click on 'navBarLogo'")
    window.location.replace("home.html");
}

// function aboutPageClickHandler(){
//     console.log("Detected click on 'navBarAbout'")
//     window.location.replace("aboutus.html");
// }

function servicesPageClickHandler(){
    console.log("Detected click on 'navBarServices'")
    window.location.replace("services.html");
}

// function contactPageClickHandler(){
//     console.log("Detected click on 'navBarContact'")
//     window.location.replace("contactus.html");
// }

function hiddenBoxClickHandler(){
    console.log("Detected click on 'hiddenBox'")
    window.location.replace("/images/zamn.png");
}

function productIClickHandler(){
    console.log("Click detected on 'ProductI'")
    if (PIOpen == false) {
        console.log("OpeningBox ProductI")
        document.getElementById("ProductI").setAttribute("style","height:120px");
        console.log("StyleChangeSuccess")
        document.getElementById("productDescI").setAttribute("style","display:block");
        console.log("productDescI is Visible.")
        PIOpen = true
        console.log("PIOpen declared as",PIOpen)
    } else {
        console.log("ClosingBox ProductI")
        document.getElementById("ProductI").setAttribute("style","height:15px");
        console.log("StyleChangeSuccess")
        document.getElementById("productDescI").setAttribute("style","display:none");
        console.log("productDescI is not Visible.")
        PIOpen = false
        console.log("PIOpen declared as",PIOpen)
    }
}

function productIIClickHandler(){
    console.log("Click detected on 'ProductII'")
    if (PIIOpen == false) {
        console.log("OpeningBox ProductII")
        document.getElementById("ProductII").setAttribute("style","height:150px");
        console.log("StyleChangeSuccess")
        document.getElementById("productDescII").setAttribute("style","display:block");
        console.log("productDescI is Visible.")
        PIIOpen = true
        console.log("PIIOpen declared as",PIIOpen)
    } else {
        console.log("ClosingBox ProductII")
        document.getElementById("ProductII").setAttribute("style","height:15px");
        console.log("StyleChangeSuccess")
        document.getElementById("productDescII").setAttribute("style","display:none");
        console.log("productDescI is not Visible.")
        PIIOpen = false
        console.log("PIIOpen declared as",PIIOpen)
    }
}

function productIIIClickHandler(){
    console.log("Click detected on 'ProductIII'")
    if (PIIIOpen == false) {
        console.log("OpeningBox ProductIII")
        document.getElementById("ProductIII").setAttribute("style","height:100px");
        console.log("StyleChangeSuccess")
        PIIIOpen = true
        console.log("PIIIOpen declared as",PIIIOpen)
    } else {
        console.log("ClosingBox ProductIII")
        document.getElementById("ProductIII").setAttribute("style","height:15px");
        console.log("StyleChangeSuccess")
        PIIIOpen = false
        console.log("PIIIOpen declared as",PIIIOpen)
    }
}

function productVIClickHandler(){
    console.log("Click detected on 'ProductVI'")
    if (PVIOpen == false) {
        console.log("OpeningBox ProductVI")
        document.getElementById("ProductVI").setAttribute("style","height:100px");
        console.log("StyleChangeSuccess")
        PVIOpen = true
        console.log("PVIOpen declared as",PVIOpen)
    } else {
        console.log("ClosingBox ProductVI")
        document.getElementById("ProductVI").setAttribute("style","height:15px");
        console.log("StyleChangeSuccess")
        PVIOpen = false
        console.log("PVIOpen declared as",PVIOpen)
    }
}

console.log("i hate js get this shit off the face of the earth")

var navBarLogo = document.getElementById("navBarLogo")
navBarLogo.addEventListener('click', homePageClickHandler)

// var navBarAbout = document.getElementById("navBarAbout")
// navBarAbout.addEventListener('click', aboutPageClickHandler)

var navBarServices = document.getElementById("navBarServices")
navBarServices.addEventListener('click', servicesPageClickHandler)

var productI = document.getElementById("ProductI")
productI.addEventListener('click', productIClickHandler)

var productII = document.getElementById("ProductII")
productII.addEventListener('click', productIIClickHandler)

var productIII = document.getElementById("ProductIII")
productIII.addEventListener('click', productIIIClickHandler)

var productVI = document.getElementById("ProductVI")
productVI.addEventListener('click', productVIClickHandler)

// var navBarContact = document.getElementById("navBarContact")
// navBarContact.addEventListener('click', contactPageClickHandler)

