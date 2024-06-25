const frases = ["❝¡No te conformes con lo normal, busca la grandeza con cada acción!❞", "❝Cree en ti mismo y en lo que eres. Se consciente de que hay algo en tu interior que es mas grande que cualquier obstáculo❞", "❝El exito es la suma de pequeños esfuerzos repetidos dia tras dia❞"]; // Array de frases
    const tiempoDeCambio = 5000; // (5 segundos)

let indiceFrase = 0; 

function mostrarSiguienteFrase() {
    document.getElementById("frase").textContent = frases[indiceFrase];
    indiceFrase = (indiceFrase + 1) % frases.length; // Incrementar el índice circularmente
}

mostrarSiguienteFrase();

setInterval(mostrarSiguienteFrase, tiempoDeCambio);

