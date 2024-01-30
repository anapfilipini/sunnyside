const loaderContainer = document.querySelector(".loader-container");
const pageContent = document.querySelector("#page-content");

window.addEventListener("load", () => {
  loaderContainer.classList.add("hidden");
  pageContent.classList.add("visible");
});

const btnMenu = document.querySelector("#menu");

btnMenu.addEventListener("click", toogleMenu);

function toogleMenu() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
  btnMenu.classList.toggle("active");
}

const sections = document.querySelectorAll(".js-scroll");
const halfWindow = window.innerHeight * 0.6;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - halfWindow;
    if (isSectionVisible < 0) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

animaScroll();

window.addEventListener("scroll", animaScroll);

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
