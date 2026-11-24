
// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", function() {
    navbar.classList.toggle("active");
});

// FAQ Toggle
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function(item) {
    item.addEventListener("click", function() {
        item.classList.toggle("active");
    });
});


/* Loading Screen */
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");

    setTimeout(function() {
        loader.style.display = "none";
    }, 2000);
});


/* Scroll Reveal Animation */
function revealSections() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(function(section) {
        const elementTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 50) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", function() {
    revealSections();
});

/* Scroll Progress Bar */
window.addEventListener("scroll", function() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width = progress + "%";
});

/* Back To Top Button */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
/* Dark Light Mode with Local Storage */

const themeToggle = document.getElementById("themeToggle");

// Load Saved Theme
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.innerHTML = "☀️";
} else {
    document.body.classList.remove("light-mode");
    themeToggle.innerHTML = "🌙";
}

// Toggle Theme
themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = "🌙";
    }

});
/* Contact Form Validation */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();
    formMessage.innerHTML = "";

    const email = document.getElementById("userEmail").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.innerHTML = "Please enter a valid email!";
        formMessage.style.color = "red";
        return;
    }

    formMessage.innerHTML = "Message submitted successfully!";
    formMessage.style.color = "#22c55e";

    contactForm.reset();

});