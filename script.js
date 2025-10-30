/* ---------- GALERIA ZDJĘĆ ---------- */
const galleryImages = [
    // Lokal 1 – Oborniki Śląskie
    [
        'images/lokal1/01.webp', 'images/lokal1/02.webp',
        'images/lokal1/03.webp'
    ],
    
    // Lokal 2 – Oborniki Śląskie
    [
        'images/lokal2/01.webp', 'images/lokal2/02.webp',
        'images/lokal2/03.webp', 'images/lokal2/04.webp'
    ],
    // Domek – Oborniki Śląskie
    [
        'images/domek/01.webp', 'images/domek/02.webp',
        'images/domek/03.webp', 'images/domek/04.webp',
        'images/domek/05.webp', 'images/domek/06.webp',
        'images/domek/07.webp', 'images/domek/08.webp'
    ],
    // Motocykl - Oborniki Śląskie
    [
        'images/motocykl/06.webp', 'images/motocykl/02.webp',
        'images/motocykl/03.webp', 'images/motocykl/04.webp',
        'images/motocykl/05.webp', 'images/motocykl/01.webp',
        'images/motocykl/07.webp', 'images/motocykl/08.webp',
        'images/motocykl/09.webp'
    ],
    // Drzwi aluminiowe z ościeżnicą - Oborniki Śląskie
    [
        'images/drzwi/01.webp'
    ]
];

let currentGalleryIndex = 0;
let currentImageIndex   = 0;

const galleryLightbox            = document.getElementById('galleryLightbox');
const lightboxMainImage          = document.getElementById('lightboxMainImage');
const lightboxThumbnailsContainer= document.getElementById('lightboxThumbnails');

/* ---------- GALERIA ---------- */
function openGallery(galleryId) {
    currentGalleryIndex = galleryId;
    currentImageIndex   = 0;
    galleryLightbox.style.display = 'flex';
    createThumbnails();
    updateGalleryImage();
}
function closeGallery() { galleryLightbox.style.display = 'none'; }
function changeImage(step) {
    const images = galleryImages[currentGalleryIndex];
    currentImageIndex = (currentImageIndex + images.length + step) % images.length;
    updateGalleryImage();
}
function updateGalleryImage() {
    lightboxMainImage.src = galleryImages[currentGalleryIndex][currentImageIndex];
    [...lightboxThumbnailsContainer.children].forEach((thumb, i) =>
        thumb.classList.toggle('active', i === currentImageIndex)
    );
}
function createThumbnails() {
    lightboxThumbnailsContainer.innerHTML = '';
    galleryImages[currentGalleryIndex].forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Miniatura ${i + 1}`;
        img.className = 'lightbox-thumbnail';
        img.onclick = () => { currentImageIndex = i; updateGalleryImage(); };
        lightboxThumbnailsContainer.appendChild(img);
    });
}

/* Zamknięcie lightboxa klikając w tło */
galleryLightbox.addEventListener('click', e => {
    if (e.target === galleryLightbox) closeGallery();
});

/* Nawigacja klawiaturą */
document.addEventListener('keydown', e => {
    if (galleryLightbox.style.display === 'flex') {
        if (e.key === 'Escape') closeGallery();
        if (e.key === 'ArrowLeft')  changeImage(-1);
        if (e.key === 'ArrowRight') changeImage(1);
    }
});

function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

/* Nasłuchiwanie zmiany rozmiaru ekranu */
window.addEventListener("resize", function() {
    const menu = document.querySelector(".nav-links");
    if (window.innerWidth > 768) {
        menu.style.display = "flex"; /* Przywraca normalne menu na dużym ekranie */
    } else {
        menu.style.display = "none"; /* Ukrywa menu na małych ekranach */
    }
});
