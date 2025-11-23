document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for section animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Share functionality
    document.querySelectorAll('.share-btn').forEach(shareBtn => {
    shareBtn.addEventListener('click', function() {
        alert('এই লেখাটি শেয়ার করার জন্য ধন্যবাদ! আসল ওয়েবসাইটে এটি সোশ্যাল মিডিয়ায় শেয়ার করার অপশন থাকবে।');
    });
});


    // Flower particles for poetic effect
    function createFlowerParticle() {
        const flower = document.createElement('div');
        flower.innerHTML = '<i data-feather="flower" class="w-4 h-4 text-rose-300"></i>';
        flower.style.position = 'fixed';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = '-20px';
        flower.style.opacity = Math.random() * 0.5 + 0.1;
        flower.style.transform = `rotate(${Math.random() * 360}deg)`;
        flower.style.zIndex = '-10';
        flower.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
        document.body.appendChild(flower);
        
        feather.replace();
        
        // Remove after animation
        setTimeout(() => {
            flower.remove();
        }, 10000);
    }

    // Create some initial flowers
    for (let i = 0; i < 15; i++) {
        setTimeout(createFlowerParticle, i * 300);
    }

    // Add CSS for falling animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
});