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

const navLinks = document.querySelectorAll(".navlist li");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("bx-x");
        navlist.classList.remove("open");
    });
}
);

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(link => {
    link.addEventListener("click", () => {
        navlist.classList.remove("open");
        menu.classList.remove("bx-x");
    });
}
);

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".navlist a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".navlist a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}

const allImages = document.querySelectorAll("img");

allImages.forEach(image => {
    image.setAttribute("loading", "lazy");
}
);

const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const formButton = document.getElementById("submit-button");

form.addEventListener("submit", e => {
    e.preventDefault();
    checkInputs();
}
);


// Rest of the code goes here