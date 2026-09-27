// =========================================================
// ÍCONES LUCIDE
// =========================================================

lucide.createIcons();


// =========================================================
// HEADER AO ROLAR A PÁGINA
// =========================================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// =========================================================
// MENU MOBILE
// =========================================================

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


// Fecha menu ao selecionar uma opção

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

    });

});


// =========================================================
// ANO AUTOMÁTICO
// =========================================================

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


// =========================================================
// SCROLL REVEAL SIMPLES
// =========================================================

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.1
    }
);


document
    .querySelectorAll(
        ".experience-card, .review-card, .gallery-item"
    )
    .forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });