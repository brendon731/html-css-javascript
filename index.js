import {projects} from "./projectsNames.js"
const iframe = document.querySelector("iframe")
const ul = document.querySelector("ul")
let link = "<h3 class=title>projetos</h3>"

window.setIframe = (element) => {
    let a = document.querySelector(".current")
    if(a){
        a.classList.remove("current")
    }
    element.classList.add("current")
    let path = element.id
    iframe.src = `projects/${path}/${path}.html`
    
    if(window.screen.availWidth < 512){
        setTimeout(() => {
            ul.classList.toggle("nav--hidden")
        },500);
    }
    
}

const menu = document.querySelector("#menu")
menu.onclick = e =>{ul.classList.toggle("nav--hidden")}


projects.forEach((element, index) => {
    link += `
    <li>
        <a href="#" id=${element} onclick="setIframe(this)">
            ${element}
        </a>
    </li>
    `        
})
ul.insertAdjacentHTML("beforeend", link)