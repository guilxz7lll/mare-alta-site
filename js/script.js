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

    // =========================================================
// FILTRO DO CARDÁPIO
// =========================================================

const menuButtons = document.querySelectorAll(".menu-category");
const menuItems = document.querySelectorAll(".menu-item");

menuButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        // Remove ativo de todos os botões
        menuButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Ativa o botão clicado
        button.classList.add("active");

        // Filtra os itens
        menuItems.forEach(item => {

            const itemCategory = item.dataset.category;

            if (itemCategory === category) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }

        });

    });

});