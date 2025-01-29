// Aguarda o carregamento do DOM antes de executar a função
document.addEventListener("DOMContentLoaded", () => {
  showSection("sobre"); // Exibe a seção "sobre" por padrão ao carregar a página
});

function showSection(sectionId) {
  // Seleciona todas as seções da página
  const sections = document.querySelectorAll("section");
  
  // Esconde todas as seções e define a opacidade como 0 para ocultá-las
  sections.forEach((section) => {
    section.style.display = "none";
    section.style.opacity = 0;
  });

  // Obtém a seção correspondente ao ID passado como argumento
  const sectionToShow = document.getElementById(sectionId);
  
  // Torna a seção visível alterando o display para "block"
  sectionToShow.style.display = "block";

  // Pequeno atraso para garantir que a transição de opacidade ocorra corretamente
  setTimeout(() => {
    sectionToShow.style.opacity = 1;
  }, 10);

  // Atualiza os links do menu para destacar o ativo
  const navLinks = document.querySelectorAll("nav a");
  
  // Remove a classe "active" de todos os links do menu
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Seleciona o link correspondente à seção exibida
  const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);

   
  // Se o link correspondente existir, adiciona a classe "active" para destacá-lo
  if (activeLink) {
    activeLink.classList.add("active");
  }
}
