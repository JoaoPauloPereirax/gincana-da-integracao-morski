let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

showSlide(currentIndex);
