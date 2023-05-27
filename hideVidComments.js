detector3 = document.querySelector(".hideVidComments_container");
toggle3 = document.querySelector(".toggle3");
getMode3 = localStorage.getItem("mode3");

window.addEventListener("DOMContentLoaded", () => {

    if(getMode3 && getMode3 === "off3"){
        showElement(3);
        detector3.classList.add("off3")
        toggle3.classList.add("active3");
    } else {
        hideElement(3);
    }

    toggle3.addEventListener("click", () => {
        detector3.classList.toggle("off3");
    
        if(!detector3.classList.contains("off3")) {
            hideElement(3);
            return localStorage.setItem("mode3", "on3");
        }
        else if(detector.classList.contains("off")) {
            showElement(3);
        }

        localStorage.setItem("mode3", "off3");
    });
    
    toggle3.addEventListener("click", () => toggle3.classList.toggle("active3"));
});