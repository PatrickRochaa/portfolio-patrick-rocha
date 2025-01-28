const menuOpener = document.querySelector(".menu-opener");
const nav = document.querySelector("header nav");

menuOpener.addEventListener("click", () => {
  nav.classList.toggle("opened");
  menuOpener.classList.toggle("opened");
});

document.addEventListener("click", function (event) {
  // Seleciona todos os overlays
  const overlays = document.querySelectorAll(".overlay");

  overlays.forEach((overlay) => {
    // Verifica se o clique foi dentro do overlay ou do botão
    const projeto = overlay.closest(".projeto");
    if (!projeto.contains(event.target)) {
      overlay.style.opacity = "0"; // Esconde o overlay
    }
  });
});

/* =================================================== */

// Mostrar o overlay quando o projeto for clicado
const projetos = document.querySelectorAll(".projeto");
projetos.forEach((projeto) => {
  projeto.addEventListener("click", function () {
    const overlay = projeto.querySelector(".overlay");
    overlay.style.opacity = "1"; // Mostra o overlay
  });
});
