// Source: https://www.youtube.com/watch?v=TyITCYwsWHs

// Get the dark mode toggle element from the DOM
const darkmode = document.querySelector(".darkmode");
// Check if dark mode is enabled by retrieving the mode value from localStorage
let isDarkModeEnabled = localStorage.getItem("mode0") === "on0";
// Toggle the "active0" class on the darkmode element based on the dark mode status
darkmode.classList.toggle("active0", isDarkModeEnabled);

// If dark mode is enabled, apply the dark mode styles
if (isDarkModeEnabled) {
    darkMode();
}

// Add a click event listener to the darkmode element
darkmode.addEventListener("click", () => {
    // Toggle the dark mode status
    isDarkModeEnabled = !isDarkModeEnabled;
    // Toggle the "active0" class on the darkmode element based on the updated dark mode status
    darkmode.classList.toggle("active0", isDarkModeEnabled);
    // Store the updated dark mode status in localStorage
    localStorage.setItem("mode0", isDarkModeEnabled ? "on0" : "off0");
    // Apply appropriate styles based on the dark mode status
    if (isDarkModeEnabled) {
        darkMode();
    } else {
        lightMode();
    }
});


