// Script simples para abrir/fechar menu hambúrguer
    const toggle = document.getElementById("menu-toggle"); // seleciona o botão
    const links = document.getElementById("nav-link"); // seleciona o menu
 
    // Adiciona um evento de clique ao botão
    toggle.addEventListener("click", () => {
      links.classList.toggle("active");
    });