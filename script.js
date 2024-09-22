let tamanioActual = 1; 
const tamanos = ["20px", "25px", "30px", "45px", "55px"];
const titulo = ["45px", "50px", "50px","50px","55px"];
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
      let parrafos = document.getElementsByClassName("texto");
      let h1 = document.getElementsByTagName("h1");
      for (let i = 0; i < parrafos.length; i++) {
          parrafos[i].style.fontSize = tamanos[tamanioActual];
          h1[i].style.fontSize = titulo[tamanioActual];
      }
 }

const btn_disminuir = document.getElementById("disminuir");
btn_disminuir.addEventListener("click", disminuirTamano);

const btn_aumentar = document.getElementById("aumentar");
btn_aumentar.addEventListener("click", aumentarTamano);