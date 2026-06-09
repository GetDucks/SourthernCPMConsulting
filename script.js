const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const year = document.getElementById("year");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const wowButton = document.getElementById("wowButton");

const bgImages = document.querySelectorAll(".bg-image");
const bgSections = document.querySelectorAll("[data-bg]");

if (year) {
    year.textContent = new Date().getFullYear();
}

/* Mobile navigation */
if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("active");
            menuToggle.classList.remove("active");
        });
    });
}

/* Magnetic header button */
if (wowButton) {
    wowButton.addEventListener("mousemove", (event) => {
        const rect = wowButton.getBoundingClientRect();

        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        wowButton.style.transform = `translate(${x * 0.12}px, ${
            y * 0.18
        }px) scale(1.05)`;
    });

    wowButton.addEventListener("mouseleave", () => {
        wowButton.style.transform = "";
    });
}

/* Scroll-changing construction photo backgrounds */
function updateScrollBackground() {
    let currentBg = 0;
    const triggerPoint = window.innerHeight * 0.45;

    bgSections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            currentBg = Number(section.dataset.bg);
        }
    });

    bgImages.forEach((img, index) => {
        img.classList.toggle("active", index === currentBg);
    });
}

updateScrollBackground();

window.addEventListener("scroll", updateScrollBackground);
window.addEventListener("resize", updateScrollBackground);
window.addEventListener("load", updateScrollBackground);

/* Contact form placeholder behavior */
if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        formMessage.textContent = "Thank you. Your request has been received.";

        contactForm.reset();

        setTimeout(() => {
            formMessage.textContent = "";
        }, 5000);
    });
}