// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});


// Scroll Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
});

// --- Dark/Light Mode Toggle ---
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn ? themeToggleBtn.querySelector('ion-icon') : null;

// Check Local Storage
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
    body.classList.add('light-mode');
    if (icon) icon.setAttribute('name', 'sunny-outline');
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            if (icon) icon.setAttribute('name', 'sunny-outline');
            localStorage.setItem('theme', 'light');
        } else {
            if (icon) icon.setAttribute('name', 'moon-outline');
            localStorage.setItem('theme', 'dark');
        }
    });

}

// --- Contact Form Handling ---
const contactForm = document.getElementById('contactForm');
const messageResult = document.getElementById('messageResult');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        // Show Loading
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-block';
        submitBtn.disabled = true;
        messageResult.textContent = '';
        messageResult.className = 'message-result';

        // Send Data using EmailJS
        // Send Data using EmailJS
        emailjs.sendForm('service_egjp5dd', 'template_rwn4w4g', contactForm)
            .then(function() {
                // Success
                btnText.style.display = 'inline-block';
                btnLoading.style.display = 'none';
                submitBtn.disabled = false;
                
                messageResult.textContent = 'Message sent successfully!';
                messageResult.classList.add('success');
                messageResult.classList.remove('error');
                
                contactForm.reset();
                
                setTimeout(() => {
                    messageResult.textContent = '';
                    messageResult.classList.remove('success');
                }, 5000);
            }, function(error) {
                // Error
                console.error('FAILED...', error);
                messageResult.textContent = "Oops! There was a problem submitting your form";
                messageResult.classList.add('error');
                messageResult.classList.remove('success');
                
                btnText.style.display = 'inline-block';
                btnLoading.style.display = 'none';
                submitBtn.disabled = false;
            });
    });
}

