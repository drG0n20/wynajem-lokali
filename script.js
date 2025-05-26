document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeButton = document.querySelector('.close-button');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            lightbox.style.display = 'flex'; // Pokaż lightbox
            lightboxImg.src = thumbnail.src; // Ustaw źródło pełnoekranowego zdjęcia
        });
    });

    closeButton.addEventListener('click', () => {
        lightbox.style.display = 'none'; // Ukryj lightbox
    });

    // Zamknij lightbox po kliknięciu poza zdjęciem
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
