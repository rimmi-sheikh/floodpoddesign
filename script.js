// Smooth scrolling for internal links
document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scrolling behavior
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    });

    // Add animation to gallery items on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Observe gallery items and impact cards
    const galleryItems = document.querySelectorAll(".gallery-item");
    const impactCards = document.querySelectorAll(".impact-card");

    galleryItems.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(item);
    });

    impactCards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(card);
    });

    // Add parallax effect to hero section
    window.addEventListener("scroll", function () {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector(".hero");
        const rate = scrolled * -0.5;

        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
