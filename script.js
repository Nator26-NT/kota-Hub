// --- Gallery Data ---
const galleryItems = [
    { id: 1, src: "images/1792183518660.jpg", alt: "Kota Hub Food 1" },
    { id: 2, src: "images/1792183521967.jpg", alt: "Kota Hub Food 2" },
    { id: 3, src: "images/1792183525114.jpg", alt: "Kota Hub Food 3" },
    { id: 4, src: "images/1792183528709.jpg", alt: "Kota Hub Food 4" },
    { id: 5, src: "images/1792183532139.jpg", alt: "Kota Hub Food 5" },
    { id: 6, src: "images/1792183535127.jpg", alt: "Kota Hub Food 6" },
    { id: 7, src: "images/1792183540557.jpg", alt: "Kota Hub Food 7" },
    { id: 8, src: "images/1792183544058.jpg", alt: "Kota Hub Food 8" },
    { id: 9, src: "images/1792183548517.jpg", alt: "Kota Hub Food 9" },
    { id: 10, src: "images/1792183552075.jpg", alt: "Kota Hub Food 10" },
    { id: 11, src: "images/1792183555806.jpg", alt: "Kota Hub Food 11" },
    { id: 12, src: "images/1792183559832.jpg", alt: "Kota Hub Food 12" },
    { id: 13, src: "images/1792183562883.jpg", alt: "Kota Hub Food 13" },
    { id: 14, src: "images/1792183566034.jpg", alt: "Kota Hub Food 14" },
    { id: 15, src: "images/1792183569020.jpg", alt: "Kota Hub Food 15" },
    { id: 16, src: "images/1792183571913.jpg", alt: "Kota Hub Food 16" },
    { id: 17, src: "images/1792183575110.jpg", alt: "Kota Hub Food 17" },
    { id: 18, src: "images/1792183578802.jpg", alt: "Kota Hub Food 18" },
    { id: 19, src: "images/1792183587276.jpg", alt: "Kota Hub Food 19" },
    { id: 20, src: "images/1792183590740.jpg", alt: "Kota Hub Food 20" },
    { id: 21, src: "images/1792183594976.jpg", alt: "Kota Hub Food 21" },
    { id: 22, src: "images/1792183598123.jpg", alt: "Kota Hub Food 22" },
    { id: 23, src: "images/1792183601199.jpg", alt: "Kota Hub Food 23" },
    { id: 24, src: "images/1792183604371.jpg", alt: "Kota Hub Food 24" },
    { id: 25, src: "images/1792183607670.jpg", alt: "Kota Hub Food 25" },
    { id: 26, src: "images/1792183612968.jpg", alt: "Kota Hub Food 26" },
    { id: 27, src: "images/1792183620791.jpg", alt: "Kota Hub Food 27" },
    { id: 28, src: "images/1792183624634.jpg", alt: "Kota Hub Food 28" },
    { id: 29, src: "images/1792183628141.jpg", alt: "Kota Hub Food 29" },
    { id: 30, src: "images/1792183631590.jpg", alt: "Kota Hub Food 30" },
    { id: 31, src: "images/1792183634726.jpg", alt: "Kota Hub Food 31" },
    { id: 32, src: "images/1792183637786.jpg", alt: "Kota Hub Food 32" },
    { id: 33, src: "images/1792183640795.jpg", alt: "Kota Hub Food 33" },
    { id: 34, src: "images/1792183644217.jpg", alt: "Kota Hub Food 34" },
    { id: 35, src: "images/1792183684864.jpg", alt: "Kota Hub Food 35" },
    { id: 36, src: "images/1792183692790.jpg", alt: "Kota Hub Food 36" },
    { id: 37, src: "images/1792183700315.jpg", alt: "Kota Hub Food 37" },
    { id: 38, src: "images/1792183711470.jpg", alt: "Kota Hub Food 38" },
    { id: 39, src: "images/1792183714925.jpg", alt: "Kota Hub Food 39" },
    { id: 40, src: "images/1792183845502.jpg", alt: "Kota Hub Food 40" },
    { id: 41, src: "images/1792183854492.jpg", alt: "Kota Hub Food 41" },
    { id: 42, src: "images/1792183857713.jpg", alt: "Kota Hub Food 42" },
    { id: 43, src: "images/1792183861288.jpg", alt: "Kota Hub Food 43" },
    { id: 44, src: "images/1792183868622.jpg", alt: "Kota Hub Food 44" },
    { id: 45, src: "images/1792183876993.jpg", alt: "Kota Hub Food 45" },
    { id: 46, src: "images/1792183880698.jpg", alt: "Kota Hub Food 46" },
    { id: 47, src: "images/1792183883839.jpg", alt: "Kota Hub Food 47" },
];

// --- Render Gallery ---
const galleryGrid = document.getElementById('gallery-grid');

function renderGallery() {
    // Only run this if we are on a page with a gallery
    if (!galleryGrid) return;

    galleryGrid.innerHTML = '';
    galleryItems.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        // Staggered animation delay
        galleryItem.style.animationDelay = `${index * 0.05}s`;

        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.alt}" loading="lazy">
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// --- Loading Screen ---
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('hidden');
        document.body.classList.add('loaded');
    }
});

// --- Mobile Menu Toggle ---
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('open');
        });
    });
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
});