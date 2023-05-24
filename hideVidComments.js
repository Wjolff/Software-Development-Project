detector3 = document.querySelector(".hideVidComments_container"),
    toggle3 = document.querySelector(".toggle3");

let getMode3 = localStorage.getItem("mode3");
if(getMode3 && getMode3 === "off3"){
    detector3.classList.add("off3")
    toggle3.classList.add("active3");
}

window.addEventListener("DOMContentLoaded", () => {
    toggle3.addEventListener("click", () => {
        detector3.classList.toggle("off3");
    
        if(!detector3.classList.contains("off3")) {
            return localStorage.setItem("mode3", "on3");
        }
        localStorage.setItem("mode3", "off3");
    });
    
    toggle3.addEventListener("click", () => toggle3.classList.toggle("active3"));
});