let body = document.querySelector("body")
let btn = document.querySelector(".hamb")
let icon = document.querySelector(".icon")
let nav = document.querySelector(".navigation")
let navLink = document.querySelectorAll(".nav-link")

btn.addEventListener("click", ()=> {
    body.classList.toggle("block")
    icon.classList.toggle("active")
    nav.classList.toggle("nav-active")
})

navLink.forEach((el)=> el.addEventListener("click", ()=>{
body.classList.remove("block")
icon.classList.remove("active")
nav.classList.remove("nav-active")
}))