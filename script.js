let tamanioActual = 1; // Tamaño inicial (1)
const tamanos = ["20px", "30px", "40px", "50px", "60px","70px"]; // Array de tamaños es
function disminuirTamano() {
      if (tamanioActual > 0) {
          tamanioActual--;
          cambiarTamano();
      }
}

function aumentarTamano() {
      if (tamanioActual < tamanos.length - 1) {
          tamanioActual++;
          cambiarTamano();
      }
}

function cambiarTamano() {
      let parrafos = document.getElementsByTagName("p");
      let h1 = document.getElementsByTagName("h1");
      for (let i = 0; i < parrafos.length; i++) {
          parrafos[i].style.fontSize = tamanos[tamanioActual];
          h1[i].style.fontSize = tamanos[tamanioActual+1];
      }
 }