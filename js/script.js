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

// Incremento do contador do carrinho
let cartCount = 0;
const cartCounterElement = document.getElementById('cart-counter');

document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCounterElement.textContent = cartCount;
        cartCounterElement.classList.remove('hidden'); // Mostra o contador ao adicionar o primeiro item
    });
});

document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
        alert("Produto adicionado ao carrinho!");
    });
});
// Seleciona todos os botões de adicionar
const addToCartButtons = document.querySelectorAll('.product-card button');
const cartCounter = document.getElementById('cart-counter');
let itemCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        itemCount += 1;  // Incrementa o contador
        cartCounter.textContent = itemCount;  // Atualiza o texto do contador
    });
});

