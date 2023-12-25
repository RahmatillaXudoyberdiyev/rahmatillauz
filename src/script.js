window.addEventListener("DOMContentLoaded", () => {
    burgerBtn = document.querySelector(".burger");
    navbar = document.querySelector(".nav-bar"); // Fix typo here

    burgerBtn.addEventListener("click", () => {
        navbar.classList.toggle("nav-bar-active");
        document.body.classList.toggle("stop-scrolling"); // Add this line to prevent scrolling
        document.querySelector(".transparent-closing").classList.toggle("transparent-field");
    });

    document.querySelector(".transparent-closing").addEventListener("click", () => {
        navbar.classList.remove("nav-bar-active");
        document.body.classList.remove("stop-scrolling");
        document.querySelector(".transparent-closing").classList.remove("transparent-field");
    });
});
