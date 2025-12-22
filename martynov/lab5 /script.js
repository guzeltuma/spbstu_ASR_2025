// Плавная прокрутка к якорям
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

// Мобильное меню
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});

// Закрытие мобильного меню при клике на ссылку
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
    });
});

// Валидация формы контакта
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const company = document.getElementById('company').value.trim();
    const message = document.getElementById('message').value.trim();

    // Базовая валидация
    if (!name || !email || !message) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Пожалуйста, введите корректный email адрес.');
        return;
    }

    // Имитация отправки формы
    alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
    contactForm.reset();
});

// Функция валидации email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Анимация появления элементов при прокрутке
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Наблюдение за элементами для анимации
document.querySelectorAll('.feature-card, .step, .testimonial-card, .pricing-card').forEach(card => {
    observer.observe(card);
});

// Добавление класса для анимации (CSS будет обрабатывать)
document.addEventListener('DOMContentLoaded', function() {
    // Добавление анимационных классов к элементам
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    document.querySelectorAll('.step').forEach((step, index) => {
        step.style.animationDelay = `${index * 0.2}s`;
    });

    document.querySelectorAll('.pricing-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Плавное появление контента при загрузке страницы
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Обработка изменения размера окна для мобильного меню
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
    }
});

// Добавление CSS для анимаций
const style = document.createElement('style');
style.textContent = `
    .feature-card, .step, .testimonial-card, .pricing-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .feature-card.animate-in, .step.animate-in, .testimonial-card.animate-in, .pricing-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .nav-links.active {
        display: flex;
    }

    .burger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .burger.active span:nth-child(2) {
        opacity: 0;
    }

    .burger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    @media (max-width: 768px) {
        .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            flex-direction: column;
            padding: 1rem 0;
            border-top: 1px solid #e0e0e0;
        }
    }
`;
document.head.appendChild(style);
