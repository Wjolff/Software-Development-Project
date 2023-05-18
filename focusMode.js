detector = document.querySelector(".focusMode_container"),
    toggle = document.querySelector(".toggle1");

toggle.addEventListener("click", () => {
    detector.classList.toggle("off");

    if(!detector.classList.contains("off")) {
        return localStorage.setItem("mode", "on");
    }
    localStorage.setItem("mode", "off");
});

let getMode = localStorage.getItem("mode");
if(getMode && getMode === "off"){
    detector.classList.add("off")
    toggle.classList.add("active");
}

toggle.addEventListener("click", () => toggle.classList.toggle("active"));