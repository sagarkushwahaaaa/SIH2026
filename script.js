// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA Button functionality
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (name && email && message) {
        // Show success message
        alert(`Thank you ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
        
        // Reset form
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Add scroll animation effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards and items
document.querySelectorAll('.feature-card, .feature-item').forEach(el => {
    observer.observe(el);
});

// Random star generation
function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.style.position = 'fixed';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.opacity = Math.random() * 0.7 + 0.3;
        star.style.zIndex = '1';
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
        starsContainer.appendChild(star);
    }
}

// Initialize stars
createStars();

// Add parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const clouds = document.querySelectorAll('.cloud');
    clouds.forEach((cloud, index) => {
        cloud.style.transform = `translateY(${scrolled * (0.5 + index * 0.1)}px)`;
    });
});

// Mobile menu toggle (if needed for responsive)
function initMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    
    // Add mobile menu button functionality here if needed
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.style.display = 'flex';
        }
    });
}

initMobileMenu();

// Add hover effect to nav links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
