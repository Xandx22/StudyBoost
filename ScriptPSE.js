document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.querySelector('.menu-icon');
  var dropdownMenu = document.querySelector('.dropdown-menu');

  menuIcon.addEventListener('click', function() {
      if (dropdownMenu.style.display === 'block') {
          dropdownMenu.style.display = 'none';
      } else {
          dropdownMenu.style.display = 'block';
      }
  });

  document.addEventListener('click', function(event) {
      if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.style.display = 'none';
      }
  });
});
// Obtiene la fecha de hoy
const today = new Date();

// Encuentra el próximo sábado
let nextSaturday = new Date(today);
nextSaturday.setDate(today.getDate() + (6 - today.getDay() + 7) % 7);

// Establece la fecha objetivo como el próximo sábado a las 00:00 horas
nextSaturday.setHours(0, 0, 0, 0);

// Calcula la fecha final de la cuenta regresiva
const countdownDate = nextSaturday.getTime();

// Actualiza la cuenta regresiva cada segundo
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calcula el tiempo restante
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el resultado
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Si la cuenta ha terminado, escribe un mensaje
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerText = "EXPIRED";
    }
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(header => {
      header.addEventListener("click", function() {
          const content = this.nextElementSibling;
          const allContents = document.querySelectorAll(".accordion-content");

          // Cerrar todos los contenidos
          allContents.forEach(c => {
              if (c !== content) {
                  c.style.display = "none";
              }
          });

          // Alternar el contenido actual
          if (content.style.display === "block") {
              content.style.display = "none";
          } else {
              content.style.display = "block";
          }
      });
  });
});
