const hamburger = document.querySelector(".hamburger");
const pageLinks = document.querySelector(".page-links");
const navRight = document.querySelector(".nav-right");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    pageLinks.classList.toggle("active");
    navRight.classList.toggle("active");
})

document.querySelectorAll("#nav-content").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    pageLinks.classList.remove("active");
    navRight.classList.remove("active");
}))