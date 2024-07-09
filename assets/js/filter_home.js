// Código JavaScript para o filtro de categorias
const filtroBtns = document.querySelectorAll('.filtro-btn');
const produtos = document.querySelectorAll('.produto');

filtroBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const categoria = btn.getAttribute('data-categoria');

    // Remover a classe 'active' de todos os botões e produtos
    filtroBtns.forEach(btn => btn.classList.remove('active'));
    produtos.forEach(produto => produto.style.display = 'none');

    // Adicionar a classe 'active' ao botão clicado
    btn.classList.add('active');

    // Mostrar produtos da categoria selecionada ou todos se 'todos' for selecionado
    if (categoria === 'todos') {
      produtos.forEach(produto => produto.style.display = 'block');
    } else {
      const produtosFiltrados = document.querySelectorAll(`.produto.${categoria}`);
      produtosFiltrados.forEach(produto => produto.style.display = 'block');
    }
  });
});
