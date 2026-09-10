// =============================================================
// JavaScript - Portfolio Interactions
// =============================================================

console.log("👋 Welcome to Shahd Wael's Portfolio!");

// ===== IMAGE GALLERY =====
function changeImage(src, element) {
    // Update main image
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = src;
    }
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    if (element) {
        element.classList.add('active');
    }
}

// ===== LIGHTBOX =====
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    if (lightbox && lightboxImage) {
        lightboxImage.src = src;
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// ===== ON PAGE LOAD =====
window.onload = function() {
    console.log("✅ Portfolio loaded successfully!");
    console.log("🎨 Shahd Wael · Front-End & UI/UX Designer");
    console.log("📧 shahd@design.dev");
    console.log("📱 " + document.querySelectorAll('.thumbnail').length + " UI screens loaded");
    console.log("🖥️ 3 device mockups loaded");
    
    // Avatar click
    const avatar = document.querySelector('.avatar-frame');
    if (avatar) {
        avatar.addEventListener('click', function() {
            alert('👋 Hi! I\'m Shahd, a Front-End Developer & UI/UX Designer');
        });
    }
};

// ===== CARD HOVER EFFECT =====
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ===== SOCIAL LINKS LOGGING =====
document.querySelectorAll('.social a').forEach(link => {
    link.addEventListener('click', function(e) {
        const platform = this.getAttribute('title') || 'social';
        console.log(`🔗 Clicked: ${platform} - ${this.getAttribute('href')}`);
    });
});

// ===== VISIT COUNTER =====
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount = parseInt(visitCount) + 1;
localStorage.setItem('visitCount', visitCount);
console.log(`👀 Total visits: ${visitCount}`);

// ===== CONSOLE STYLING =====
console.log('%c✨ Shahd Wael ✨', 'font-size: 22px; font-weight: bold; color: #b388ff;');
console.log('%cFront-End Developer · UI/UX Designer', 'font-size: 14px; color: #7ae0a0;');
console.log('📱 10+ UI Screens · 3+ Real Projects');
