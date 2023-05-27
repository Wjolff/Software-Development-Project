detector5 = document.querySelector(".hideTags_container");
toggle5 = document.querySelector(".toggle5");
getMode5 = localStorage.getItem("mode5");

window.addEventListener("DOMContentLoaded", () => {

    if(getMode5 && getMode5 === "off5"){
        showElement(5);
        detector5.classList.add("off5")
        toggle5.classList.add("active5");
    } else {
        hideElement(5);
    }

    toggle5.addEventListener("click", () => {
        detector5.classList.toggle("off5");
    
        if(!detector5.classList.contains("off5")) {
            hideElement(5);
            return localStorage.setItem("mode5", "on5");
        }
        else if(detector.classList.contains("off")) {
            showElement(5);
        }

        localStorage.setItem("mode5", "off5");
    });
    
    toggle5.addEventListener("click", () => toggle5.classList.toggle("active5")); 
});