function showSection(sectionId) {
  const sections = document.querySelectorAll('section'); // Seleciona todas as seções
  sections.forEach(section => {
    section.style.display = 'none'; // Esconde todas as seções
    section.style.opacity = 0; // Define opacidade 0 para ocultar
  });
  
  const sectionToShow = document.getElementById(sectionId); // Seleciona a seção que será exibida
  sectionToShow.style.display = 'block'; // Exibe a seção selecionada
  setTimeout(() => {
    sectionToShow.style.opacity = 1; // Anima a opacidade para 1
  }, 10); // Atraso mínimo para garantir que a transição ocorra
}
