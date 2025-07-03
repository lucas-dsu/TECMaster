function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

// Slideshow do background na página principal
const images = [
    'images/piso1.JPG',
    'images/piso2.JPG',
    'images/piso3.JPG',
    'images/piso4.JPG'
];

let currentIndex = 0;
const servicesSection = document.querySelector('.services');

if (servicesSection) {
    function changeBackground() {
        servicesSection.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 4000);
    changeBackground();
}

function calcularArea() {
  const largura = parseFloat(document.getElementById("largura").value);
  const comprimento = parseFloat(document.getElementById("comprimento").value);
  const resultadoEl = document.getElementById("resultado");

  if (!largura || !comprimento || largura <= 0 || comprimento <= 0) {
    resultadoEl.textContent = "Por favor, insira valores válidos.";
    return;
  }

  const area = largura * comprimento;
  resultadoEl.textContent = `Área total: ${area.toFixed(2)} m²`;
}
