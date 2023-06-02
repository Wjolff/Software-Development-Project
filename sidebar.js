// Source: https://www.youtube.com/watch?v=TyITCYwsWHs

// Select the toggle button element with class "toggle4"
const toggle4 = document.querySelector(".toggle4");
// Check if the "mode4" value in local storage is "on4" to determine the initial state
let isActive4 = localStorage.getItem("mode4") === "on4";
// Toggle the "active4" class on the toggle button based on the initial state
toggle4.classList.toggle("active4", isActive4);

// Ensure the wrapped code only executes after the popup content has loaded
window.addEventListener("DOMContentLoaded", () => {
    // Detect when the toggle button is clicked
    toggle4.addEventListener("click", () => {
        // Invert the isActive4 state
        isActive4 = !isActive4;
        // Toggle the "active4" class on the toggle button based on the updated state
        toggle4.classList.toggle("active4", isActive4);
        // Store the updated state in the local storage with the key "mode4"
        localStorage.setItem("mode4", isActive4 ? "on4" : "off4");
        // Check the state and call the corresponding function to hide/show DOM elements
        if (!isActive4) {
            // Calls the hideElement function to hide DOM elements
            hideElement(4);
        } else {
            // Calls the showElement function to show DOM elements
            showElement(4);
        }
    });
});