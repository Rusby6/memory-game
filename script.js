document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(".container");
  
  const cartasOriginales = [
    "images/img-1.png",
    "images/img-1.png",
    "images/img-2.png",
    "images/img-2.png",
    "images/img-3.png",
    "images/img-3.png",
    "images/img-4.png",
    "images/img-4.png",
    "images/img-5.png",
    "images/img-5.png",
    "images/img-6.png",
    "images/img-6.png",
    "images/img-7.png",
    "images/img-7.png",
    "images/img-8.png",
    "images/img-8.png",
  ];

  // Variables de estado del juego
  let cartas = [...cartasOriginales];
  let carta1 = null;
  let carta2 = null;
  let esperando = false;
  let paresEncontrados = 0;
  const totalPares = 8;

  // Función para inicializar/reiniciar el juego
  function iniciarJuego() {
    // Limpiar el contenedor
    contenedor.innerHTML = "";
    
    // Reiniciar variables
    carta1 = null;
    carta2 = null;
    esperando = false;
    paresEncontrados = 0;
    
    // Mezclar las cartas
    cartas = [...cartasOriginales].sort(() => Math.random() - 0.5);

    // Crear las cartas
    for (let i = 0; i < 16; i++) {
      const img = document.createElement("img");
      img.src = "images/question.jpg";
      img.dataset.index = i; // Guardar el índice de la carta
      contenedor.appendChild(img);

      img.addEventListener("click", function () {
        if (!esperando && !this.src.includes(".png") && this !== carta1) {
          this.src = cartas[i];

          if (carta1 === null) {
            carta1 = this;
          } else {
            carta2 = this;
            esperando = true;

            if (carta1.src === carta2.src) {
              paresEncontrados++;
              
              carta1 = null;
              carta2 = null;
              esperando = false;

              //Reiniciar partida y mensaje final
              if (paresEncontrados === totalPares) {
                setTimeout(() => {
                  alert("¡Has ganado! Encontraste todos los pares.");
                  iniciarJuego(); 
                }, 300);
              }
            } else {
              setTimeout(() => {
                carta1.src = "images/question.jpg";
                carta2.src = "images/question.jpg";
                carta1 = null;
                carta2 = null;
                esperando = false;
              }, 1000);
            }
          }
        }
      });
    }
  }

  // Iniciar el juego por primera vez
  iniciarJuego();
});