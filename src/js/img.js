const showImagesButton = document.getElementById('show-images');
const gallery = document.getElementById('image-gallery');

if (showImagesButton && gallery) {
  showImagesButton.addEventListener('click', function(e) {
    e.preventDefault();
    gallery.style.display = gallery.style.display === 'none' ? 'flex' : 'none';
  });
}
