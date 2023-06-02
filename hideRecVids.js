// Source: https://www.youtube.com/watch?v=TyITCYwsWHs

// Get the toggle2 element from the DOM
const toggle2 = document.querySelector(".toggle2");
// Check if toggle2 is active by retrieving the mode2 value from localStorage
let isActive2 = localStorage.getItem("mode2") === "on2";
// Toggle the "active2" class on the toggle2 element based on the active2 status
toggle2.classList.toggle("active2", isActive2);

// Ensures the wrapped code only executes after the popup content has loaded
window.addEventListener("DOMContentLoaded", () => {
    // Detects when the toggle2 is clicked
    toggle2.addEventListener("click", () => {
        // Toggle the active2 status
        isActive2 = !isActive2;
        // Toggle the "active2" class on the toggle2 element based on the updated active2 status
        toggle2.classList.toggle("active2", isActive2);
        // Store the updated active2 status in localStorage
        localStorage.setItem("mode2", isActive2 ? "on2" : "off2");
        if (!isActive2) {
            // Calls the hideElement function to hide DOM elements
            hideElement(2);
        } else {
            // Calls the showElement function to show DOM elements
            showElement(2);
        }
    });
});

