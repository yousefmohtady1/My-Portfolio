// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize EmailJS
(function() {
    // EmailJS configuration
    emailjs.init("DuCcvLzFGeYmbowpg");
})();

// Form submission using EmailJS
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const messageResult = document.getElementById('messageResult');
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form
    if (!name || !email || !message) {
        messageResult.innerHTML = '<p style="color: red; font-weight: bold;">Please fill in all required fields</p>';
        return;
    }

    // Disable submit button and show loading
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    messageResult.innerHTML = '<p style="color: blue;">Sending message...</p>';

    // EmailJS template parameters
    const templateParams = {
        name: name,
        email: email,
        message: message,
        to_name: 'Yousef Mohtady'
    };

    // Send email using EmailJS
    emailjs.send(
        'service_egjp5dd', // EmailJS Service ID
        'template_s745bl5', // EmailJS Template ID
        templateParams
    )
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        messageResult.innerHTML = '<p style="color: green; font-weight: bold;">Message sent successfully!</p>';
        document.getElementById('contactForm').reset();
    }, function(error) {
        console.log('FAILED...', error);
        messageResult.innerHTML = '<p style="color: red; font-weight: bold;">Failed to send message. Please try again.</p>';
    })
    .finally(function() {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
    });
});