const toggle4 = document.querySelector(".toggle4");
let isActive4 = localStorage.getItem("mode4") === "on4";

toggle4.classList.toggle("active4", isActive4);

//ensures the wrapped code only executes after popup content has loaded
window.addEventListener("DOMContentLoaded",  () => {

    //detects when toggle is clicked
    toggle4.addEventListener("click", () => {
        isActive4 = !isActive4;
        toggle4.classList.toggle("active4", isActive4);
        localStorage.setItem("mode4", isActive4 ? "on4" : "off4")
    
        if(!isActive4) {
            // Calls the hideElement function to hide DOM elements
            hideElement(4);
        }
        else {
            // Calls the showElement function to show DOM elements
            showElement(4);
        }
    });
});