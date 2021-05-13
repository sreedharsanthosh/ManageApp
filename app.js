const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const container = document.querySelector(".scrollable-section");

nextBtn.addEventListener("click", () => {
  container.style.transform = "translateX(-250px)";
});

prevBtn.addEventListener("click", () => {
  container.style.transform = "translateX(250px)";
});

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("nav-active");
});
