const toggle = document.querySelector(".toggle");
let isActive = localStorage.getItem("mode") === "on";

toggle.classList.toggle("active", isActive);

//ensures the wrapped code only executes after popup content has loaded
window.addEventListener("DOMContentLoaded",  () => {

    //detects when toggle is clicked
    toggle.addEventListener("click", () => {
        isActive = !isActive;
        toggle.classList.toggle("active", isActive);
        localStorage.setItem("mode", isActive ? "on" : "off")
    
        if(!isActive) {
            // Calls the hideElement function to hide DOM elements
            hideElement(1);
        }
        else {
            // Calls the showElement function to show DOM elements
            showElement(1);
        }
    });
});