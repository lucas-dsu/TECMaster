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

  <script>
  // Gerenciar estado dos carrosséis por tipo
  const slides = {
    polido: 0,
    epoxi: 0,
    pu: 0,
    endurecido: 0,
    recuperacao: 0
  };

  function abrirModal(tipo) {
    document.getElementById(`modal-${tipo}`).style.display = "flex";
    mostrarSlide(tipo, 0);
  }

  function fecharModal(tipo) {
    document.getElementById(`modal-${tipo}`).style.display = "none";
  }

  function mostrarSlide(tipo, index) {
    const slideEls = document.querySelectorAll(`.${tipo}-slide`);
    if (index >= slideEls.length) slides[tipo] = 0;
    else if (index < 0) slides[tipo] = slideEls.length - 1;
    else slides[tipo] = index;

    slideEls.forEach((slide, i) => {
      slide.classList.toggle("active", i === slides[tipo]);
    });
  }

  function mudarSlide(tipo, dir) {
    mostrarSlide(tipo, slides[tipo] + dir);
  }
</script>

}
