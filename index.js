
document.addEventListener('DOMContentLoaded', () => {

   window.addEventListener('load', function () {
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      preloader.classList.add('hidden');
    }, 3000); 
  });

  
// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});


// Form submission
    const contactForm = document.getElementById('contact-form');
    const popup = document.getElementById('popup');

    function showPopup() {
        popup.classList.add('show');
    }

    function hidePopup() {
        popup.classList.remove('show');
        setTimeout(() => popup.style.display = 'none', 300);
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

       popup.style.display = 'flex';
       requestAnimationFrame(() => showPopup());

        const formData = new FormData(contactForm);
        // Get form values
        try {
            const responses = await fetch('submit.php', {
                method: 'POST',
                body: formData
            });

            const message = await responses.text();

            if (message.includes("Thank you")) {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: message,
                    confirmButtonColor: '#3085d6',
                    timer: 5000,
                    timerProgressBar: true
                });
                contactForm.reset();
                
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Send Failed: Network error check your connection. ',
                    text: message,
                    confirmButtonColor: '#d33'
                });            
            }
        } catch (error) {
            Swal.fire({
            icon: 'error',
            title: 'Network Error',
            text: 'Something went wrong. Please try again.',
            confirmButtonColor: '#d33'
            });
        } finally{
           hidePopup();
        }        
    });


    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });



    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    animateOnScroll();

    window.addEventListener('scroll', animateOnScroll);

    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.skill-bar');
        
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    };

   
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

});

