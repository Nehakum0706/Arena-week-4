document.addEventListener("DOMContentLoaded", function () {
    loadTheme();
    updateFooterYear();
    setupFormValidation();
});

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

function loadTheme() {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
        document.body.classList.add("dark-mode");
    }
}

function setupFormValidation() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", validateForm);
}

function validateForm(event) {

    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (name.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }
    if (message.value.trim().length < 10) {
        messageError.textContent = "Message must contain at least 10 characters.";
        isValid = false;
    }
    if (isValid) {
        successMessage.textContent = "Your message has been sent successfully!";
        form.reset();
    }
}

const scrollButton = document.createElement("button");

scrollButton.innerHTML = "↑";
scrollButton.id = "scrollTopBtn";
document.body.appendChild(scrollButton);
scrollButton.style.display = "none";

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

scrollButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

scrollButton.style.position = "fixed";
scrollButton.style.bottom = "20px";
scrollButton.style.right = "20px";
scrollButton.style.padding = "12px 16px";
scrollButton.style.border = "none";
scrollButton.style.borderRadius = "50%";
scrollButton.style.background = "#2563eb";
scrollButton.style.color = "#fff";
scrollButton.style.cursor = "pointer";
scrollButton.style.fontSize = "18px";
scrollButton.style.zIndex = "1000";

function updateFooterYear() {
    const footer = document.querySelector("footer p");
    if (footer) {
        footer.innerHTML =
            `&copy; ${new Date().getFullYear()} TechNova Solutions. All Rights Reserved.`;
    }
}

const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.color = "#38bdf8";
    }
});

console.log("TechNova Solutions Website Loaded Successfully");