const menuOpener = document.querySelector(".menu-opener");
const nav = document.querySelector("header nav");

menuOpener.addEventListener("click", () => {
  nav.classList.toggle("opened");
  menuOpener.classList.toggle("opened");
});
