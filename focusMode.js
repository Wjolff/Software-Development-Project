detector = document.querySelector(".focusMode_container");
toggle = document.querySelector(".toggle");

//ensures the wrapped code only executes after YouTube has loaded to prevent null error from being thrown
document.addEventListener("DOMContentLoaded", function () {
    //detects when toggle is clicked
    toggle.addEventListener("click", () => {

        //first click is off since focus mode toggle is on by default
        detector.classList.toggle("off");
    
        if(!detector.classList.contains("off")) {
            return localStorage.setItem("mode", "on");
        }
        localStorage.setItem("mode", "off");
    });

    //keeps button active (able to be clicked/moved)
    toggle.addEventListener("click", () => toggle.classList.toggle("active"));
});

let getMode = localStorage.getItem("mode");
if(getMode && getMode === "off"){
    detector.classList.add("off")
    toggle.classList.add("active");
}