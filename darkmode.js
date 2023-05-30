alert("hi")
const darkmode = document.querySelector(".darkmode");
let isDarkModeEnabled = localStorage.getItem("mode0") === "on0";

// Update the button state based on the stored preference
darkmode.classList.toggle("active0", isDarkModeEnabled);

// Apply the stored color and button toggle state
if (isDarkModeEnabled) {
  darkMode();
}

// Update the button's appearance and store the preference on click
darkmode.addEventListener("click", () => {
  isDarkModeEnabled = !isDarkModeEnabled;
  darkmode.classList.toggle("active0", isDarkModeEnabled);
  localStorage.setItem("mode0", isDarkModeEnabled ? "on0" : "off0");
  
  if (isDarkModeEnabled) {
      darkMode();
  } else {
      lightMode();
  }
});