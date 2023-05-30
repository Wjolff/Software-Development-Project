const toggle2 = document.querySelector(".toggle2");
let isActive2 = localStorage.getItem("mode2") === "on2";

toggle2.classList.toggle("active2", isActive2);

//ensures the wrapped code only executes after popup content has loaded
window.addEventListener("DOMContentLoaded",  () => {

    //detects when toggle is clicked
    toggle2.addEventListener("click", () => {
        isActive2 = !isActive2;
        toggle2.classList.toggle("active2", isActive2);
        localStorage.setItem("mode2", isActive2 ? "on2" : "off2")
    
        if(!isActive2) {
            // Calls the hideElement function to hide DOM elements
            hideElement(2);
        }
        else {
            // Calls the showElement function to show DOM elements
            showElement(2);
        }
    });
});

