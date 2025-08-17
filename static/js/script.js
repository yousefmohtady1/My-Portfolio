class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.initMobileMenu();
        this.initSmoothScrolling();
        this.initEmailJS();
        this.initContactForm();
        this.initScrollAnimations();
        this.initActiveNavigation();
    }

    initMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.querySelector('.nav-menu');

        if (!mobileMenu || !navMenu) return;

        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !navMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    initEmailJS() {
        if (typeof emailjs !== 'undefined') {
            emailjs.init("DuCcvLzFGeYmbowpg");
        }
    }

    initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission();
        });
    }

    async handleFormSubmission() {
        const submitBtn = document.getElementById('submitBtn');
        const messageResult = document.getElementById('messageResult');
        const formData = this.getFormData();

        if (!this.validateForm(formData, messageResult)) return;

        this.setLoadingState(submitBtn, messageResult, true);

        try {
            if (typeof emailjs === 'undefined') {
                throw new Error('EmailJS library not loaded');
            }

            const templateParams = {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                to_name: 'Yousef Mohtady'
            };

            await emailjs.send(
                'service_egjp5dd',
                'template_s745bl5',
                templateParams
            );

            this.showMessage(messageResult, 'Message sent successfully!', 'success');
            document.getElementById('contactForm').reset();

        } catch (error) {
            console.error('Email sending failed:', error);
            this.showMessage(messageResult, 'Failed to send message. Please try again.', 'error');
        } finally {
            this.setLoadingState(submitBtn, messageResult, false);
        }
    }

    getFormData() {
        return {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim()
        };
    }

    validateForm(formData, messageResult) {
        if (!formData.name || !formData.email || !formData.message) {
            this.showMessage(messageResult, 'Please fill in all required fields', 'error');
            return false;
        }

        if (!this.isValidEmail(formData.email)) {
            this.showMessage(messageResult, 'Please enter a valid email address', 'error');
            return false;
        }

        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    setLoadingState(submitBtn, messageResult, isLoading) {
        submitBtn.disabled = isLoading;
        submitBtn.classList.toggle('loading', isLoading);
        
        if (isLoading) {
            this.showMessage(messageResult, 'Sending message...', 'info');
        }
    }

    showMessage(messageResult, message, type) {
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            info: '#3b82f6'
        };

        messageResult.innerHTML = `<p style="color: ${colors[type]}; font-weight: bold;">${message}</p>`;
        
        if (type === 'success') {
            setTimeout(() => {
                messageResult.innerHTML = '';
            }, 5000);
        }
    }

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach(el => {
            observer.observe(el);
        });
    }

    initActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-80px 0px -50% 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    this.updateActiveNavLink(id, navLinks);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    updateActiveNavLink(activeId, navLinks) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('active');
            }
        });
    }
}

class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.lazyLoadImages();
        this.preloadCriticalResources();
    }

    lazyLoadImages() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    preloadCriticalResources() {
        const criticalImages = [
            'static/images/2025_07_02_08_35_IMG_1110.JPG'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
    new PerformanceOptimizer();
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

