$(document).ready(function() {
    $('.category-card').hover(
        function() {
            $(this).css('box-shadow', '0px 15px 30px rgba(0,0,0,0.1)');
        },
        function() {
            $(this).css('box-shadow', 'none');
        }
    );

   
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').css('box-shadow', '0 2px 10px rgba(0,0,0,0.05)');
        } else {
            $('.navbar').css('box-shadow', 'none');
        }
    });
});

$(document).ready(function() {
    
    $('.insta-grid img').hover(
        function() {
            $(this).css('opacity', '0.8');
            $(this).css('transform', 'scale(1.02)');
            $(this).css('transition', 'all 0.3s ease');
        },
        function() {
            $(this).css('opacity', '1');
            $(this).css('transform', 'scale(1)');
        }
    );
});

// menu

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
           
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedCategory = button.getAttribute('data-category');

           
            menuCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (selectedCategory === 'all' || selectedCategory === cardCategory) {
                  
                    card.style.display = 'block';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 10);
                } else {
                    
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
    });
});


/**
 * Contact Form 
 
 */
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            
            const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#AD343E'; 
                } else {
                    input.style.borderColor = '#DBDFD0'; 
                }
            });

            if (isValid) {
                
                alert('Thank you! Your message has been sent.');
                contactForm.reset();
            }
        });
    }
});

/**
 * About Us 
 */
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

   
    const animateElements = document.querySelectorAll('.team-card, .mission-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

/**
 * FAQ
 */
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

           
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });

           
            if (!isOpen) {
                item.classList.add('active');
                
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                item.classList.remove('active');
                answer.style.maxHeight = null;
            }
        });
    });
});