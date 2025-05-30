/* ---------- GALERIA ZDJĘĆ ---------- */
const galleryImages = [
    // Lokal 1 – Oborniki Śląskie
    [
        'images/lokal1/zdjecie01.webp', 'images/lokal1/zdjecie02.webp', 'images/lokal1/zdjecie03.webp',
        'images/lokal1/zdjecie04.webp', 'images/lokal1/zdjecie05.webp', 'images/lokal1/zdjecie06.webp',
        'images/lokal1/zdjecie07.webp', 'images/lokal1/zdjecie08.webp', 'images/lokal1/zdjecie09.webp',
        'images/lokal1/zdjecie10.webp', 'images/lokal1/zdjecie11.webp', 'images/lokal1/zdjecie12.webp',
        'images/lokal1/zdjecie13.webp', 'images/lokal1/zdjecie14.webp', 'images/lokal1/zdjecie15.webp',
        'images/lokal1/zdjecie16.webp', 'images/lokal1/zdjecie17.webp'
    ],
    // Lokal 2 – Wrocław
    [
        'images/lokal2/01.jpg', 'images/lokal2/02.jpg',
        'images/lokal2/03.jpg', 'images/lokal2/04.jpg',
        'images/lokal2/05.jpg', 'images/lokal2/06.jpg',
    ],
    // Lokal 3 – Wrocław
    [
        'images/motocykl/image.webp', 'images/motocykl/02.jpg',
        'images/motocykl/03.jpg', 'images/motocykl/04.jpg',
        'images/motocykl/05.jpg', 'images/motocykl/01.jpg',
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
