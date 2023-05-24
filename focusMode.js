detector = document.querySelector(".focusMode_container");
toggle = document.querySelector(".toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode === "off"){
    detector.classList.add("off")
    toggle.classList.add("active");
}

//ensures the wrapped code only executes after YouTube has loaded to prevent null error from being thrown
window.addEventListener("DOMContentLoaded",  () => {
    //detects when toggle is clicked
    toggle.addEventListener("click", () => {

        //first click is off since focus mode toggle is on by default
        detector.classList.toggle("off");
        // Calls the showElement function to show DOM elements
        showElement(1);
    
        if(!detector.classList.contains("off")) {
            // Calls the hideElement function to hide DOM elements
            hideElement(1);
            return localStorage.setItem("mode", "on");
        }
        localStorage.setItem("mode", "off");
    });

    //keeps button active (able to be clicked/moved)
    toggle.addEventListener("click", () => toggle.classList.toggle("active"));
});