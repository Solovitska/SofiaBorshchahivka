document.getElementById('show-images').addEventListener('click', function(e) {
  e.preventDefault();
  const gallery = document.getElementById('image-gallery');

  // Перемикаємо видимість галереї
  gallery.style.display = gallery.style.display === 'none' ? 'flex' : 'none';
});
