(function() {
      // ===== Card click feedback =====
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.addEventListener('click', function() {
          this.style.transition = 'transform 0.1s';
          this.style.transform = 'scale(0.97)';
          setTimeout(() => { this.style.transform = 'scale(1)'; }, 120);
          const title = this.querySelector('h3')?.innerText || 'Card';
          console.log(`📦 Selected: ${title}`);
        });
      });

      // ===== Social icons click demo =====
      document.querySelectorAll('.social i').forEach(icon => {
        icon.addEventListener('click', function(e) {
          e.stopPropagation();
          const name = this.className.replace('fab fa-', '').replace('far fa-', '');
          alert(`🔗 Connect on ${name || 'social'} (demo)`);
        });
      });

      // ===== Milestone hover effect =====
      document.querySelectorAll('.milestone-list li').forEach(item => {
        item.addEventListener('mouseenter', () => {
          item.style.background = 'rgba(255,255,255,0.06)';
          item.style.borderRadius = '40px';
          item.style.paddingLeft = '0.6rem';
        });
        item.addEventListener('mouseleave', () => {
          item.style.background = 'transparent';
          item.style.paddingLeft = '0.4rem';
        });
      });

      // ===== Avatar click =====
      document.querySelector('.avatar-frame')?.addEventListener('click', function() {
        alert('📸 Your profile picture!');
      });

      // ===== Check item hover =====
      document.querySelectorAll('.check-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
          item.style.background = 'rgba(255,255,255,0.06)';
          item.style.borderRadius = '30px';
          item.style.paddingLeft = '0.6rem';
        });
        item.addEventListener('mouseleave', () => {
          item.style.background = 'transparent';
          item.style.paddingLeft = '0.4rem';
        });
      });

      console.log('✅ Portfolio ready — assignments 1, 2, 3 included.');
    })();
