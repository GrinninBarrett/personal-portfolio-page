let mobileNavButton = document.querySelector("#mobile-nav");
let mobileNavMenu = document.querySelector("#nav-menu");
let topProject = document.querySelector("#top-project-container");
let largeScreenOthers = document.querySelector("#projects-container");
let allProjects = document.querySelectorAll(".projects");
let wrapper = document.createElement("div");
let small = false;


mobileNavButton.addEventListener("click", () => {
    mobileNavMenu.classList.toggle("menu-shown");
    mobileNavMenu.style.display = "flex";
});

window.onresize = function() {
    if (window.innerWidth < 768) {
        small = true;
        topProject.outerHTML = topProject.innerHTML;
        largeScreenOthers.outerHTML = largeScreenOthers.innerHTML;
        // insert wrapper before el in the DOM tree
        allProjects.parentNode.insertBefore(wrapper, allProjects);
        // move el into wrapper
        wrapper.appendChild(allProjects);
        wrapper.setAttribute("id", "projects-container");
        // topProject.classList.remove("top-project-container");
        // topProject.classList.add("projects-container");
        // largeScreenOthers.removeAttribute("id");
        // largeScreenOthers.classList.add("projects-container")
    }
};



// function unwrap(wrapper) {
//     // place childNodes in document fragment
//     var docFrag = document.createDocumentFragment();
//     while (wrapper.firstChild) {
//         var child = wrapper.removeChild(wrapper.firstChild);
//         docFrag.appendChild(child);
//     }

//     // replace wrapper with document fragment
//     wrapper.parentNode.replaceChild(docFrag, wrapper);
// }