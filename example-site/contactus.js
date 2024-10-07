function homePageClickHandler(){
    console.log("Detected click on 'navBarLogo'")
    window.location.replace("home.html");
}

function aboutPageClickHandler(){
    console.log("Detected click on 'navBarAbout'")
    window.location.replace("aboutus.html");
}

function servicesPageClickHandler(){
    console.log("Detected click on 'navBarServices'")
    window.location.replace("services.html");
}

function contactPageClickHandler(){
    console.log("Detected click on 'navBarContact'")
    window.location.replace("contactus.html");
}

var navBarLogo = document.getElementById("navBarLogo")
navBarLogo.addEventListener('click', homePageClickHandler)

var navBarAbout = document.getElementById("navBarAbout")
navBarLogo.addEventListener('click', aboutPageClickHandler)

var navBarLogo = document.getElementById("navBarServices")
navBarLogo.addEventListener('click', servicesPageClickHandler)

var navBarLogo = document.getElementById("navBarContact")
navBarLogo.addEventListener('click', contactPageClickHandler)

