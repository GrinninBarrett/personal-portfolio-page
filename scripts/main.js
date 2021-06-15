let mobileNavButton = document.querySelector("#mobile-nav");
let mobileNavMenu = document.querySelector("#nav-menu");


mobileNavButton.addEventListener("click", () => {
    mobileNavMenu.classList.toggle("menu-shown");
    
});