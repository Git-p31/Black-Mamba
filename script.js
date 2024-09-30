document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sideMenu = document.querySelector('.side-menu');
    const body = document.querySelector('body');

    // Открытие/закрытие меню при нажатии на кнопку
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Останавливаем событие, чтобы клик на кнопку не закрывал меню
        sideMenu.classList.toggle('active');
    });

    // Закрытие меню при клике в любую область вне меню
    body.addEventListener('click', function(e) {
        // Если меню открыто и клик произошел вне бокового меню
        if (sideMenu.classList.contains('active') && !sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            sideMenu.classList.remove('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Функция для переключения слайдов
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
        });
        slides[index].classList.add('active');
    }

    // Функция автоматического переключения
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Меняем слайд каждые 20 секунд (20000 миллисекунд)
    setInterval(nextSlide, 20000);
    
    // Инициализируем первый слайд
    showSlide(currentSlide);
});
