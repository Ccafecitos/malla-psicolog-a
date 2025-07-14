const cursos = [
  { id: 1, nombre: "Fundamentos Neuroanatómicos y Funcionales del Sistema Nervioso", semestre: 1, prerequisitos: [] },
  { id: 2, nombre: "Fundamentos Socioculturales de la Psicología", semestre: 1, prerequisitos: [] },
  { id: 3, nombre: "Procesos Psicológicos I", semestre: 1, prerequisitos: [] },
  { id: 4, nombre: "Taller de Habilidades Profesionales I", semestre: 1, prerequisitos: [] },
  { id: 5, nombre: "Introducción a la Psicología", semestre: 1, prerequisitos: [] },
  { id: 6, nombre: "Electivo de Comunicación", semestre: 1, prerequisitos: [] },
  { id: 7, nombre: "Epistemología Aplicada a la Psicología", semestre: 2, prerequisitos: [] },
  { id: 8, nombre: "Introducción a la Neurociencia", semestre: 2, prerequisitos: [1] },
  { id: 9, nombre: "Procesos Psicológicos II", semestre: 3, prerequisitos: [3] },
  { id: 10, nombre: "Taller de Habilidades Profesionales II", semestre: 3, prerequisitos: [4] },
  { id: 11, nombre: "Electivo de Comunicación", semestre: 3, prerequisitos: [] },
  { id: 12, nombre: "Neuropsicología", semestre: 4, prerequisitos: [8] },
  { id: 13, nombre: "Psicología de la Personalidad", semestre: 4, prerequisitos: [] },
  { id: 14, nombre: "Psicología Social", semestre: 4, prerequisitos: [] },
  { id: 15, nombre: "Psicología del Desarrollo I", semestre: 4, prerequisitos: [] },
  { id: 16, nombre: "Teorías Psicológicas I", semestre: 4, prerequisitos: [] },
  { id: 17, nombre: "Electivo de Desarrollo del Pensamiento", semestre: 4, prerequisitos: [] },
  { id: 18, nombre: "Evaluación Psicométrica", semestre: 5, prerequisitos: [13] },
  { id: 19, nombre: "Intervención Psicosocial con Grupos", semestre: 5, prerequisitos: [14] },
  { id: 20, nombre: "Introducción a la Investigación en Psicología", semestre: 5, prerequisitos: [] },
  { id: 21, nombre: "Psicología del Desarrollo II", semestre: 5, prerequisitos: [] },
  { id: 22, nombre: "Teorías Psicológicas II", semestre: 5, prerequisitos: [] },
  { id: 23, nombre: "Evaluación Proyectiva", semestre: 6, prerequisitos: [13] },
  { id: 24, nombre: "Intervención Sociocomunitaria", semestre: 6, prerequisitos: [19] },
  { id: 25, nombre: "Metodología y Análisis de Datos Cuantitativos", semestre: 6, prerequisitos: [20] },
  { id: 26, nombre: "Psicología Organizacional", semestre: 6, prerequisitos: [] },
  { id: 27, nombre: "Teorías Psicológicas III", semestre: 6, prerequisitos: [] },
  { id: 28, nombre: "Electivo de Desarrollo Personal", semestre: 6, prerequisitos: [] },
  { id: 29, nombre: "Psicodiagnóstico Infanto Juvenil", semestre: 7, prerequisitos: [18,23] },
  { id: 30, nombre: "Intervención en Organizaciones", semestre: 7, prerequisitos: [26] },
  { id: 31, nombre: "Metodología y Análisis de Datos Cualitativos", semestre: 7, prerequisitos: [20] },
  { id: 32, nombre: "Psicopatología y Psicofarmacología Infanto Juvenil", semestre: 7, prerequisitos: [] },
  { id: 33, nombre: "Teorías Psicológicas IV", semestre: 7, prerequisitos: [] },
  { id: 34, nombre: "Electivo de Responsabilidad Social", semestre: 7, prerequisitos: [] },
  { id: 35, nombre: "Psicodiagnóstico Adulto", semestre: 8, prerequisitos: [18,23] },
  { id: 36, nombre: "Intervención Clínica Infanto Juvenil", semestre: 8, prerequisitos: [29,32] },
  { id: 37, nombre: "Proyecto de Tesis", semestre: 8, prerequisitos: [25,31] },
  { id: 38, nombre: "Psicología de la Educación", semestre: 8, prerequisitos: [] },
  { id: 39, nombre: "Psicopatología y Psicofarmacología Adulto", semestre: 8, prerequisitos: [] },
  { id: 40, nombre: "Electivo de Ética", semestre: 8, prerequisitos: [] },
  { id: 41, nombre: "Desempeño Ético del Psicólogo", semestre: 8, prerequisitos: [] },
  { id: 42, nombre: "Intervención Clínica Adulto", semestre: 9, prerequisitos: [35,39] },
  { id: 43, nombre: "Seminario de Tesis", semestre: 9, prerequisitos: [37] },
  { id: 44, nombre: "Intervención Psicoeducativa en Contextos Escolares", semestre: 9, prerequisitos: [38] },
  { id: 45, nombre: "Psicología Jurídica", semestre: 9, prerequisitos: [] },
  { id: 46, nombre: "Psicología de la Salud", semestre: 9, prerequisitos: [] },
  { id: 47, nombre: "Práctica Avanzada I", semestre: 9, prerequisitos: Array.from({ length: 46 }, (_, i) => i + 1) },
  { id: 48, nombre: "Optativo de Especialidad I", semestre: 10, prerequisitos: [] },
  { id: 49, nombre: "Optativo de Especialidad II", semestre: 10, prerequisitos: [] },
  { id: 50, nombre: "Práctica Avanzada II", semestre: 10, prerequisitos: [47] },
  { id: 51, nombre: "Optativo de Especialidad III", semestre: 10, prerequisitos: [] },
  { id: 52, nombre: "Optativo de Especialidad IV", semestre: 10, prerequisitos: [] }
];

const aprobados = new Set();

function renderMalla() {
  const container = document.getElementById("malla");
  container.innerHTML = "";

  const semestres = [...new Set(cursos.map(c => c.semestre))];

  semestres.forEach(s => {
    const bloque = document.createElement("div");
    bloque.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${s}`;
    bloque.appendChild(titulo);

    const grid = document.createElement("div");
    grid.className = "cursos";

    cursos.filter(c => c.semestre === s).forEach(curso => {
      const div = document.createElement("div");
      div.className = "curso";
      div.id = `curso-${curso.id}`;

      const h3 = document.createElement("h3");
      h3.textContent = curso.nombre;
      div.appendChild(h3);

      const p = document.createElement("p");
      p.textContent = curso.prerequisitos.length > 0
        ? `Prerrequisitos: ${curso.prerequisitos.join(", ")}`
        : "Sin prerrequisitos.";
      div.appendChild(p);

      div.addEventListener("click", () => {
        aprobados.add(curso.id);
        div.classList.add("completed");
        updateMalla();
      });

      grid.appendChild(div);
    });

    bloque.appendChild(grid);
    container.appendChild(bloque);
  });

  updateMalla();
}

function updateMalla() {
  cursos.forEach(curso => {
    const div = document.getElementById(`curso-${curso.id}`);
    if (!div) return;

    if (aprobados.has(curso.id)) {
      div.classList.add("completed");
      div.classList.add("unlocked");
    } else if (curso.prerequisitos.every(id => aprobados.has(id))) {
      div.classList.add("unlocked");
      div.classList.remove("completed");
    } else {
      div.classList.remove("unlocked");
      div.classList.remove("completed");
    }
  });
}

window.addEventListener("DOMContentLoaded", renderMalla);
