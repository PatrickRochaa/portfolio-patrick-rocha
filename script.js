// Aguarda o carregamento do DOM antes de executar a função
document.addEventListener("DOMContentLoaded", () => {
  // Adiciona a classe 'show' no header para animá-lo
  document.querySelector("header").classList.add("show");

  // Adiciona a classe 'show' na seção "sobre"
  const sobreSection = document.querySelector("section#sobre");
  if (sobreSection) {
    sobreSection.classList.add("show");
  }

  showSection("sobre"); // Exibe a seção "sobre" por padrão ao carregar a página
});

// Função para exibir a seção específica
function showSection(sectionId) {
  hideAllSections(); // Esconde todas as seções
  showSectionById(sectionId); // Exibe a seção específica
  updateNavLinks(sectionId); // Atualiza os links do menu para destacar o ativo
}

// Função para esconder todas as seções
function hideAllSections() {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.display = "none";
    section.style.opacity = 0;
  });
}

// Função para exibir uma seção específica com animação de transição
function showSectionById(sectionId) {
  const sectionToShow = document.querySelector(`section#${sectionId}`);
  if (sectionToShow) {
    sectionToShow.style.display = "block";
    // Pequeno atraso para garantir que a transição de opacidade ocorra corretamente
    setTimeout(() => {
      sectionToShow.style.opacity = 1;
    }, 10);
  }
}

// Função para atualizar os links do menu, destacando o link ativo
function updateNavLinks(sectionId) {
  const navLinks = document.querySelectorAll("nav a");

  // Remove a classe "active" de todos os links do menu
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Adiciona a classe "active" ao link correspondente à seção exibida
  const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }
}
