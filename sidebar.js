detector4 = document.querySelector(".hideSidebar_container"),
    toggle4 = document.querySelector(".toggle4");

let getMode4 = localStorage.getItem("mode4");
if(getMode4 && getMode4 === "off4"){
    detector4.classList.add("off4")
    toggle4.classList.add("active4");
}

window.addEventListener("DOMContentLoaded", () => {

    toggle4.addEventListener("click", () => {
        detector4.classList.toggle("off4");
        showElement(4);
    
        if(!detector4.classList.contains("off4")) {
            hideElement(4);
            return localStorage.setItem("mode4", "on4");
        }
        
        localStorage.setItem("mode4", "off4");
    });
    
    toggle4.addEventListener("click", () => toggle4.classList.toggle("active4"));
});