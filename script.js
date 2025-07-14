// Mapa de prerrequisitos según tu malla
const prerrequisitos = {
  8: [1],
  9: [3],
  10: [4],
  12: [8],
  16: [3],
  17: [15],
  18: [13],
  19: [14],
  23: [13],
  24: [19],
  25: [20],
  29: [18, 23],
  30: [26],
  31: [20],
  35: [18, 23],
  36: [29, 32],
  37: [25, 31],
  42: [35, 39],
  43: [37],
  44: [38],
  47: Array.from({ length: 46 }, (_, i) => i + 1),
  50: [47]
};

// Set que guarda los ramos que ya aprobaste
const aprobados = new Set();

// Al cargar la página, desbloqueamos los ramos que no tienen requisitos
window.onload = () => {
  actualizarEstado();
};

// Lógica para aprobar un ramo
function aprobar(id) {
  aprobados.add(id);
  actualizarEstado();
}

// Función que revisa qué ramos deben estar bloqueados o desbloqueados
function actualizarEstado() {
  document.querySelectorAll('.ramo').forEach(div => {
    const id = parseInt(div.id);

    if (aprobados.has(id)) {
      div.classList.add('completed');
      div.classList.add('unlocked');
    } else if (
      !prerrequisitos[id] ||
      prerrequisitos[id].every(req => aprobados.has(req))
    ) {
      div.classList.add('unlocked');
      div.classList.remove('completed');
    } else {
      div.classList.remove('unlocked');
      div.classList.remove('completed');
    }
  });
}
