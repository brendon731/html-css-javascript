
    const iframe = document.querySelector("iframe")
    const ul = document.querySelector("ul")
    let link = "<h3 class=title>projetos</h3>"

    function setIframe(element){
        let a = document.querySelector(".current")
        if(a){
            a.classList.remove("current")
        }
        element.classList.add("current")
        let path = element.id
        iframe.src = `projects/${path}/${path}.html`
       
    }

    fetch("/projects",
        {headers:{ 
            'Accept': 'application/json'
        }}
    )
    .then(res=>res.json())
    .then(r=>{
        r.forEach((element, index) => {
            link += `
            <li>
                <a href="#" id=${element} onclick="setIframe(this)">
                    ${element}
                </a>
            </li>
            `        
        })
        ul.insertAdjacentHTML("beforeend", link)
    })
    
    .catch(error=>{console.log(error)})

    const menu = document.querySelector("#menu")
    menu.onclick = e =>{ul.classList.toggle("nav--hidden")}