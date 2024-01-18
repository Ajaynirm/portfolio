const home=document.querySelector(".home-btn");
const about=document.querySelector(".about-btn");
const contact=document.querySelector(".contact-btn");
const project=document.querySelector(".project-btn");


home.addEventListener("click", () => {
    let linkElement = document.getElementById("home-Link");
    linkElement.click();
});
about.addEventListener("click", () => {
    let linkElement = document.getElementById("about-Link");
    linkElement.click();
});
contact.addEventListener("click", () => {
    let linkElement = document.getElementById("contact-Link");
    linkElement.click();
});
project.addEventListener("click", () => {
    let linkElement = document.getElementById("project-Link");
    linkElement.click();
});