function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

// Slideshow do background da seção "services"
const images = [
    'images/piso1.JPG',
    'images/piso2.JPG',
    'images/piso3.JPG',
    'images/piso4.JPG'
];

let currentIndex = 0;
const servicesSection = document.querySelector('.services');

function changeBackground() {
    servicesSection.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 4000); // Troca a cada 4 segundos

// Inicializa com a primeira imagem
changeBackground();
