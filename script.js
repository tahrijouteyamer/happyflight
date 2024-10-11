window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("loading").style.display = "none";
        document.getElementById("content").style.display = "block";
        document.body.classList.remove("no-scroll");
    }, 2000);
});

document.body.classList.add("no-scroll");

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 60);
});

const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
});




// Rest of the code will be added later