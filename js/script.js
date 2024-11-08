// Carrossel
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slides img');
    let dots = document.querySelectorAll('.dot');

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');

    setTimeout(showSlides, 5000);
}

function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}

// Menu hamburguer
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("navbar").classList.toggle("show");
});
