// Source: https://www.youtube.com/watch?v=TyITCYwsWHs

// Get the toggle element from the DOM
const toggle = document.querySelector(".toggle");
// Check if the toggle is active by retrieving the mode value from localStorage
let isActive = localStorage.getItem("mode") === "on";
// Toggle the "active" class on the toggle element based on the active status
toggle.classList.toggle("active", isActive);

// Ensures the wrapped code only executes after the popup content has loaded
window.addEventListener("DOMContentLoaded", () => {
    // Detects when the toggle is clicked
    toggle.addEventListener("click", () => {
        // Toggle the active status
        isActive = !isActive;
        // Toggle the "active" class on the toggle element based on the updated active status
        toggle.classList.toggle("active", isActive);
        // Store the updated active status in localStorage
        localStorage.setItem("mode", isActive ? "on" : "off");
        if (!isActive) {
            // Calls the hideElement function to hide DOM elements
            hideElement(1);
        } else {
            // Calls the showElement function to show DOM elements
            showElement(1);
        }
    });
});