const toggle5 = document.querySelector(".toggle5");
let isActive5 = localStorage.getItem("mode5") === "on5";

toggle5.classList.toggle("active5", isActive5);

//ensures the wrapped code only executes after popup content has loaded
window.addEventListener("DOMContentLoaded",  () => {

    //detects when toggle is clicked
    toggle5.addEventListener("click", () => {
        isActive5 = !isActive5;
        toggle5.classList.toggle("active5", isActive5);
        localStorage.setItem("mode5", isActive5 ? "on5" : "off5")
    
        if(!isActive5) {
            // Calls the hideElement function to hide DOM elements
            hideElement(5);
        }
        else {
            // Calls the showElement function to show DOM elements
            showElement(5);
        }
    });
});