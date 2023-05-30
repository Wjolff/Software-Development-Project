const toggle3 = document.querySelector(".toggle3");
let isActive3 = localStorage.getItem("mode3") === "on3";

toggle3.classList.toggle("active3", isActive3);

//ensures the wrapped code only executes after popup content has loaded
window.addEventListener("DOMContentLoaded",  () => {

    //detects when toggle is clicked
    toggle3.addEventListener("click", () => {
        isActive3 = !isActive3;
        toggle3.classList.toggle("active3", isActive3);
        localStorage.setItem("mode3", isActive3 ? "on3" : "off3")
    
        if(!isActive3) {
            // Calls the hideElement function to hide DOM elements
            hideElement(3);
        }
        else {
            // Calls the showElement function to show DOM elements
            showElement(3);
        }
    });
});