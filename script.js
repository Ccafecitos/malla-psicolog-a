const prerrequisitos = {
  8: [1],
  9: [3],
  10: [4],
  12: [8],
  18: [13],
  19: [14],
  // Agrega más relaciones según tu malla
};

const aprobados = new Set();

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

function aprobar(id) {
  aprobados.add(id);
  actualizarEstado();
}

window.onload = () => {
  actualizarEstado();
};
