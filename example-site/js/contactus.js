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

console.log("i hate js get this shit off the face of the earth")

var navBarLogo = document.getElementById("navBarLogo")
navBarLogo.addEventListener('click', homePageClickHandler)

var navBarAbout = document.getElementById("navBarAbout")
navBarAbout.addEventListener('click', aboutPageClickHandler)

var navBarServices = document.getElementById("navBarServices")
navBarServices.addEventListener('click', servicesPageClickHandler)

var navBarContact = document.getElementById("navBarContact")
navBarContact.addEventListener('click', contactPageClickHandler)

