const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const year = document.getElementById("year");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const wowButton = document.getElementById("wowButton");

if (year) {
    year.textContent = new Date().getFullYear();
}

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

/* Magnetic button movement */
if (wowButton) {
    wowButton.addEventListener("mousemove", (event) => {
        const rect = wowButton.getBoundingClientRect();

        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        wowButton.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px) scale(1.05)`;
    });

    wowButton.addEventListener("mouseleave", () => {
        wowButton.style.transform = "";
    });

    wowButton.addEventListener("click", (event) => {
        const rect = wowButton.getBoundingClientRect();

        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        ripple.style.left = `${event.clientX - rect.left}px`;
        ripple.style.top = `${event.clientY - rect.top}px`;

        wowButton.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 700);
    });
}

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