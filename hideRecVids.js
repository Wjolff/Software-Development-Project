detector2 = document.querySelector(".hideRecVids_container"),
    toggle2 = document.querySelector(".toggle2");

let getMode2 = localStorage.getItem("mode2");
if(getMode2 && getMode2 === "off2"){
    detector2.classList.add("off2")
    toggle2.classList.add("active2");
}

toggle2.addEventListener("click", () => {
    detector2.classList.toggle("off2");

    if(!detector2.classList.contains("off2")) {
        return localStorage.setItem("mode2", "on2");
    }
    localStorage.setItem("mode2", "off2");
});

toggle2.addEventListener("click", () => toggle2.classList.toggle("active2"));