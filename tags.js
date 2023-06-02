// Source: https://www.youtube.com/watch?v=TyITCYwsWHs

// Select the toggle button element with class "toggle5"
const toggle5 = document.querySelector(".toggle5");
// Check if the "mode5" value in local storage is "on5" to determine the initial state
let isActive5 = localStorage.getItem("mode5") === "on5";
// Toggle the "active5" class on the toggle button based on the initial state
toggle5.classList.toggle("active5", isActive5);

// Ensure the wrapped code only executes after the popup content has loaded
window.addEventListener("DOMContentLoaded", () => {
    // Detect when the toggle button is clicked
    toggle5.addEventListener("click", () => {
        // Invert the isActive5 state
        isActive5 = !isActive5;
        // Toggle the "active5" class on the toggle button based on the updated state
        toggle5.classList.toggle("active5", isActive5);
        // Store the updated state in the local storage with the key "mode5"
        localStorage.setItem("mode5", isActive5 ? "on5" : "off5");
        // Check the state and call the corresponding function to hide/show DOM elements
        if (!isActive5) {
            // Calls the hideElement function to hide DOM elements
            hideElement(5);
        } else {
            // Calls the showElement function to show DOM elements
            showElement(5);
        }
    });
});