document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for fade-up animation on promise cards
    const fadeUpElements = document.querySelectorAll('.promise-card[data-animation="fade-up"]');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    fadeUpElements.forEach(element => {
        observer.observe(element);
    });

    // Accordion functionality for FAQ section
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isExpanded = question.classList.contains('active');

            // Close all other open FAQs
            document.querySelectorAll('.faq-question.active').forEach(activeQuestion => {
                if (activeQuestion !== question) {
                    activeQuestion.classList.remove('active');
                    activeQuestion.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle the clicked FAQ
            if (isExpanded) {
                question.classList.remove('active');
                answer.style.maxHeight = null;
            } else {
                question.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // Hover effect for package cards, highlighting the hovered one and restoring the default
    const packageCards = document.querySelectorAll('.package-card');
    const defaultPopularCard = document.querySelector('.package-card.default-popular');

    packageCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Remove the highlight from the default card if it's not the one we're hovering over
            if (defaultPopularCard && !card.classList.contains('default-popular')) {
                defaultPopularCard.classList.remove('most-popular');
            }
            // Add the highlight to the hovered card
            card.classList.add('most-popular');
        });

        card.addEventListener('mouseleave', () => {
            // Remove highlight from the card that was just hovered
            card.classList.remove('most-popular');

            // Restore highlight to the default card
            if (defaultPopularCard) {
                defaultPopularCard.classList.add('most-popular');
            }
        });
    });

    // The typewriter effect code has been commented out, as noted in the original code,
    // to prefer the more performant CSS animation for the hero headline.
});