const heading = document.getElementById("page-title");
const button = document.getElementById("mode-selector");
const footer = document.getElementsByTagName("footer")[0];
const body = document.getElementsByTagName("body")[0];

function toggleDarkmode(){
    let DOMList = [heading,button,footer,body];
    for (obj of DOMList){
        obj.classList.toggle("dark-mode");
    }
}

button.addEventListener("click", toggleDarkmode);