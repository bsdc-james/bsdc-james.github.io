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
    document.getElementById("ProductI").setAttribute("style","height:100px");
}

function productIIClickHandler(){
    console.log("Click detected on 'ProductII'")
    document.getElementById("ProductII").setAttribute("style","height:100px");
}

function productIIIClickHandler(){
    console.log("Click detected on 'ProductIII'")
    document.getElementById("ProductIII").setAttribute("style","height:100px");
}

function productVIClickHandler(){
    console.log("Click detected on 'ProductVI'")
    document.getElementById("ProductVI").setAttribute("style","height:100px");
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

