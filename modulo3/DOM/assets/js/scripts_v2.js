const heading = document.getElementById("page-title");
const button = document.getElementById("mode-selector");
const footer = document.getElementsByTagName("footer")[0];
const body = document.getElementsByTagName("body")[0];

const darkModeClass = "dark-mode";
const DOMList = [heading,button,footer,body];

function changeMode(){
    toggleClass();
    toggleText();
}

function toggleText(){
    const lightModeTxt = "Light Mode";
    const darkModeTxt = "Dark Mode";

    if (body.classList.contains(darkModeClass)){
        heading.innerHTML = darkModeTxt + " ON";
        button.innerHTML = lightModeTxt;
        return;
    }
    
    heading.innerHTML = lightModeTxt + " ON";
    button.innerHTML = darkModeTxt;
}

function toggleClass(){
    for (obj of DOMList){
        obj.classList.toggle(darkModeClass);
    }
}

button.addEventListener("click", changeMode);