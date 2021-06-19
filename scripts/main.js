let mobileNavButton = document.querySelector(".fas");
let mobileNavMenu = document.querySelector("#nav-menu");
let mobileNavRoot = document.querySelector("#mobile-nav-menu-root");


mobileNavButton.addEventListener("click", () => {
    mobileNavButton.classList.toggle("fa-times");
    mobileNavButton.classList.toggle("fa-bars");
    mobileNavMenu.classList.toggle("menu-shown");
});