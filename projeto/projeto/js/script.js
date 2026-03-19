const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

// Botões
const prevBtn = document.querySelector('#btn-voltar');
const nextBtn = document.querySelector('#btn-proximo');

let counter = 0;
const size = images[0].clientWidth; // Pega a largura de uma imagem

nextBtn.addEventListener('click', () => {
  if (counter >= images.length - 1) return; // Evita passar do limite
  counter++;
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return; // Evita voltar antes da primeira
  counter--;
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});