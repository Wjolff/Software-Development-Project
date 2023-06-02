// Source: https://www.youtube.com/watch?v=TyITCYwsWHs

// Get the toggle3 element from the DOM
const toggle3 = document.querySelector(".toggle3");
// Check if toggle3 is active by retrieving the mode3 value from localStorage
let isActive3 = localStorage.getItem("mode3") === "on3";
// Toggle the "active3" class on the toggle3 element based on the active3 status
toggle3.classList.toggle("active3", isActive3);

// Ensures the wrapped code only executes after the popup content has loaded
window.addEventListener("DOMContentLoaded", () => {
    // Detects when the toggle3 is clicked
    toggle3.addEventListener("click", () => {
        // Toggle the active3 status
        isActive3 = !isActive3;
        // Toggle the "active3" class on the toggle3 element based on the updated active3 status
        toggle3.classList.toggle("active3", isActive3);
        // Store the updated active3 status in localStorage
        localStorage.setItem("mode3", isActive3 ? "on3" : "off3");
        if (!isActive3) {
            // Calls the hideElement function to hide DOM elements
            hideElement(3);
        } else {
            // Calls the showElement function to show DOM elements
            showElement(3);
        }
    });
});