// Insta Travels UAE JavaScript

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Contact form submission
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert(
            "Thank you for contacting Insta Travels UAE.\n\nWe have received your inquiry.\n\nFor a faster response, please click the 'Email Us' button or contact us via Telegram."
        );

        form.reset();

    });
}

// Header color change while scrolling
window.addEventListener("scroll", function() {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.background = "#083b8a";

    } else {

        header.style.background = "#0b5ed7";

    }

});

// Fade animation on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";

    observer.observe(section);

});

// Welcome message
window.onload = function () {

    setTimeout(function () {

        alert(
            "Welcome
