detector5 = document.querySelector(".hideTags_container"),
    toggle5 = document.querySelector(".toggle5");

let getMode5 = localStorage.getItem("mode5");
if(getMode5 && getMode5 === "off5"){
    detector5.classList.add("off5")
    toggle5.classList.add("active5");
}

window.addEventListener("DOMContentLoaded", () => {
    toggle5.addEventListener("click", () => {
        detector5.classList.toggle("off5");
    
        if(!detector5.classList.contains("off5")) {
            return localStorage.setItem("mode5", "on5");
        }
        localStorage.setItem("mode5", "off5");
    });
    
    toggle5.addEventListener("click", () => toggle5.classList.toggle("active5")); 
});