function getRandomImageUrl(query) {
  // Devuelve una imagen aleatoria de Unsplash relacionada con la consulta
  return `https://source.unsplash.com/600x400/?${encodeURIComponent(query)}`;
}

// --- Función para actualizar el contador de artículos ---
function updateArticleCount() {
  // Selecciona ambos grid-container (estáticos y dinámicos)
  const containers = document.querySelectorAll('.grid-container');
  const total = containers[0].querySelectorAll('.article-block').length + containers[1].querySelectorAll('.article-block').length;
  const articleCount = document.getElementById('article-count');
  articleCount.textContent = 'Artículos totales: ' + total;
}

// --- Función para agregar artículos dinámicamente ---
function setupArticleForm() {
  const btn = document.getElementById('add-article-btn');
  const title = document.getElementById('article-title');
  const text = document.getElementById('article-text');
  // Segunda grid-container para artículos nuevos
  const containers = document.querySelectorAll('.grid-container');
  const articlesList = containers[1];

  btn.addEventListener('click', function() {
    if (title.value.trim() && text.value.trim()) {
      // Selecciona una imagen aleatoria
      const imagenAleatoria = getRandomImageUrl(title.value.trim());
      const div = document.createElement('div');
      div.className = 'article-block';
      div.innerHTML = `
        <img src="${imagenAleatoria}" alt="Imagen artículo" style="width:100%;max-height:150px;object-fit:cover;margin-bottom:8px;">
        <h3>${title.value.trim()}</h3>
        <p>${text.value.trim()}</p>`;
      articlesList.prepend(div);
      title.value = '';
      text.value = '';
      updateArticleCount();
    }
  });
}

// --- Inicialización al cargar la página ---
document.addEventListener("DOMContentLoaded", function() {
  setupArticleForm();
  updateArticleCount();
});