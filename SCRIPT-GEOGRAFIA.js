let correctas = [1, 2, 3, 2, 2];
let opcion_elegida = [];
let cantidad_correctas = 0;

function respuesta(num_pregunta, seleccionada) {
  opcion_elegida[num_pregunta] = seleccionada.value;
  let id = "p" + num_pregunta;

  let labels = document.getElementById(id).querySelectorAll('label');
  labels.forEach(label => label.style.backgroundColor = "white");

  seleccionada.parentNode.style.backgroundColor = "#d3d3d3";
}

function corregir() {
  cantidad_correctas = 0;
  for (let i = 0; i < correctas.length; i++) {
    let pregunta = document.getElementById("p" + i);
    let labels = pregunta.querySelectorAll('label');

    if (opcion_elegida[i] != undefined) {
      if (correctas[i] == opcion_elegida[i]) {
        cantidad_correctas++;
        labels[opcion_elegida[i] - 1].style.backgroundColor = "#90ee90"; // Soft green
      } else {
        labels[opcion_elegida[i] - 1].style.backgroundColor = "#ffcccb"; // Soft red
        labels[correctas[i] - 1].style.backgroundColor = "#90ee90"; // Soft green
      }
    } else {
      labels[correctas[i] - 1].style.backgroundColor = "#90ee90"; // Soft green
    }

    // Deshabilitar las opciones después de enviar
    let radios = pregunta.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.disabled = true);
  }
  document.getElementById("resultado").innerHTML = "Respuestas correctas: " + cantidad_correctas;
}
