function homePageClickHandler(){
    console.log("Detected click on 'navBarLogo'")
    window.location.replace("home.html");
}

var navBarLogo = document.getElementById("navBarLogo")
navBarLogo.addEventListener('click', homePageClickHandler)