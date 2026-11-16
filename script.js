
// ==============================
// STC - Interactive Functions
// ==============================

// Mobile Navigation

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", function () {

    const isOpen = mainNav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close menu after clicking a navigation link

const navLinks = mainNav.querySelectorAll("a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mainNav.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});

// Automatic Copyright Year

const yearElement = document.getElementById("current-year");

yearElement.textContent = new Date().getFullYear();
