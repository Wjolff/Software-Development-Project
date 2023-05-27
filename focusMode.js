detector = document.querySelector(".focusMode_container");
toggle = document.querySelector(".toggle");
getMode = localStorage.getItem("mode");

//ensures the wrapped code only executes after popup content has loaded
window.addEventListener("DOMContentLoaded",  () => {

    if(getMode && getMode === "off"){
        showElement(1);
        detector.classList.add("off")
        toggle.classList.add("active");
    } else {
        hideElement(1);
    }

    //detects when toggle is clicked
    toggle.addEventListener("click", () => {

        //first click is off since focus mode toggle is on by default
        detector.classList.toggle("off");
    
        if(!detector.classList.contains("off")) {
            // Calls the hideElement function to hide DOM elements
            hideElement(1);
            return localStorage.setItem("mode", "on");
        }
        else if(detector.classList.contains("off")) {
            // Calls the showElement function to show DOM elements
            showElement(1);
        }
        localStorage.setItem("mode", "off");
    });

    //keeps button active (able to be clicked/moved)
    toggle.addEventListener("click", () => toggle.classList.toggle("active"));
});