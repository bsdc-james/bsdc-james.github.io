let descIopen = false
let descIIopen = false
let descIIIopen = false
let descIVopen = false


function homePageClickHandler(){
    console.log("Detected click on 'navBarLogo'")
    window.location.replace("/example-site/");
}

function aboutPageClickHandler(){
    console.log("Detected click on 'navBarCU'")
    window.location.replace("/example-site/contact-us");
}

function servicesPageClickHandler(){
    console.log("Detected click on 'navBarS'")
    window.location.replace("/example-site/services");
}

function productIClickHandler(){
    const productIDesc = document.getElementById("productDescI")
    if (descIopen == false){
        productIDesc.style = "display:block;"
        descIopen = true
    }else{
        productIDesc.style = "display:none;"
        descIopen = false
    }
}

function productIIClickHandler(){
    const productIIDesc = document.getElementById("productDescII")
    if (descIIopen == false){
        productIIDesc.style = "display:block;"
        descIIopen = true
    }else{
        productIIDesc.style = "display:none;"
        descIIopen = false
    }
}

function productIIIClickHandler(){
    const productIIIDesc = document.getElementById("productDescIII")
    if (descIIIopen == false){
        productIIIDesc.style = "transition: 0.25s;display:block;"
        descIIIopen = true
    }else{
        productIIIDesc.style = "transition: 0.25s;display:none;"
        descIIIopen = false
    }
}

function productIVClickHandler(){
    const productIVDesc = document.getElementById("productDescIV")
    if (descIVopen == false){
        productIVDesc.style = "transition: 0.25s;display:block;"
        descIVopen = true
    }else{
        productIVDesc.style = "transition: 0.25s;display:none;"
        descIVopen = false
    }
}

console.log("i hate js get this stuff off the face of the earth")

const navBarLogo = document.getElementById("navBarLogo")
navBarLogo.addEventListener('click', homePageClickHandler)

const navBarAbout = document.getElementById("navBarCU")
navBarAbout.addEventListener('click', aboutPageClickHandler)

const navBarServices = document.getElementById("navBarS")
navBarServices.addEventListener('click', servicesPageClickHandler)


const productI = document.getElementById("ProductI")
productI.addEventListener('click', productIClickHandler)

const productII = document.getElementById("ProductII")
productII.addEventListener('click', productIIClickHandler)

const productIII = document.getElementById("ProductIII")
productIII.addEventListener('click', productIIIClickHandler)

const productIV = document.getElementById("ProductIV")
productIV.addEventListener('click', productIVClickHandler)
