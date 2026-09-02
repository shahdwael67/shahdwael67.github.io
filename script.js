

console.log("👋 مرحباً بك في موقع Shahd Wael!");

// 1. رسالة ترحيب عند تحميل الصفحة
window.onload = function() {
    console.log("✅ الصفحة جاهزة!");
    
    // إظهار رسالة ترحيب في الـ Console
    console.log("🎨 Shahd Wael · UI/UX Portfolio");
    console.log("📧 shahd@design.dev");
    
    // إضافة تأثير عند الضغط على الصورة
    const avatar = document.querySelector('.avatar-frame');
    if (avatar) {
        avatar.addEventListener('click', function() {
            alert('👋 مرحباً! أنا شهد، مصممة UI/UX');
        });
    }
};

// 2. تأثير عند تمرير الماوس على البطاقات (إضافة تفاعل إضافي)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        // إضافة تأثير بسيط
        this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        // إرجاع الحالة الطبيعية
        this.style.transform = 'translateY(0)';
    });
});

// 3. عرض رسالة عند النقر على أيقونات السوشيال ميديا
document.querySelectorAll('.social i').forEach(icon => {
    icon.addEventListener('click', function() {
        const platform = this.className.split(' ')[1] || 'social';
        console.log(`🔗 تم النقر على: ${platform}`);
        alert(`🔗 سيتم نقلك إلى صفحة ${platform}`);
    });
});

// 4. عداد بسيط للزيارات (محاكاة)
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount = parseInt(visitCount) + 1;
localStorage.setItem('visitCount', visitCount);
console.log(`👀 عدد زيارات الموقع: ${visitCount}`);

// 5. تأثير كتابة في الـ Console
console.log('%c✨ Shahd Wael ✨', 'font-size: 20px; font-weight: bold; color: #b388ff;');
console.log('%cUI/UX Designer · EdTech Focus', 'font-size: 14px; color: #7ae0a0;');
console.log('📱 Mobile Apps · Websites · Redesigns');
