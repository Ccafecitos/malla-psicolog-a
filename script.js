document.addEventListener('DOMContentLoaded', () => {

  // Lista de ramos con sus prerrequisitos
  const cursos = [
    { id: "Fundamentos Neuroanatómicos y Funcionales del Sistema Nervioso", prerequisitos: [] },
    { id: "Fundamentos Socioculturales de la Psicología", prerequisitos: [] },
    { id: "Procesos Psicológicos I", prerequisitos: [] },
    { id: "Taller de Habilidades Profesionales I", prerequisitos: [] },
    { id: "Introducción a la Psicología", prerequisitos: [] },
    { id: "Electivo de Comunicación", prerequisitos: [] },

    { id: "Epistemología Aplicada a la Psicología", prerequisitos: [] },
    { id: "Introducción a la Neurociencia", prerequisitos: ["Fundamentos Neuroanatómicos y Funcionales del Sistema Nervioso"] },
    { id: "Procesos Psicológicos II", prerequisitos: ["Procesos Psicológicos I"] },
    { id: "Taller de Habilidades Profesionales II", prerequisitos: ["Taller de Habilidades Profesionales I"] },
    { id: "Electivo de Comunicación II", prerequisitos: [] },

    { id: "Neuropsicología", prerequisitos: ["Introducción a la Neurociencia"] },
    { id: "Psicología de la Personalidad", prerequisitos: [] },
    { id: "Psicología Social", prerequisitos: [] },
    { id: "Psicología del Desarrollo I: Primera y Segunda Infancia", prerequisitos: [] },
    { id: "Teorías Psicológicas I", prerequisitos: [] },
    { id: "Electivo de Desarrollo del Pensamiento", prerequisitos: [] },

    { id: "Evaluación Psicométrica", prerequisitos: ["Psicología de la Personalidad"] },
    { id: "Intervención Psicosocial con Grupos", prerequisitos: ["Psicología Social"] },
    { id: "Introducción a la Investigación en Psicología", prerequisitos: [] },
    { id: "Psicología del Desarrollo II: Adolescencia y Adultez", prerequisitos: [] },
    { id: "Teorías Psicológicas II", prerequisitos: [] },

    { id: "Evaluación Proyectiva", prerequisitos: ["Evaluación Psicométrica"] },
    { id: "Intervención Sociocomunitaria", prerequisitos: ["Intervención Psicosocial con Grupos"] },
    { id: "Metodología y Análisis de Datos Cuantitativos", prerequisitos: ["Introducción a la Investigación en Psicología"] },
    { id: "Psicología Organizacional", prerequisitos: [] },
    { id: "Teorías Psicológicas III", prerequisitos: [] },
    { id: "Electivo de Desarrollo Personal", prerequisitos: [] },

    { id: "Psicodiagnóstico Infanto Juvenil", prerequisitos: ["Evaluación Psicométrica", "Evaluación Proyectiva"] },
    { id: "Intervención en Organizaciones", prerequisitos: ["Psicología Organizacional"] },
    { id: "Metodología y Análisis de Datos Cualitativo", prerequisitos: ["Introducción a la Investigación en Psicología"] },
    { id: "Psicopatología y Psicofarmacología Infanto Juvenil", prerequisitos: [] },
    { id: "Teorías Psicológicas IV", prerequisitos: [] },
    { id: "Electivo de Responsabilidad Social", prerequisitos: [] },

    { id: "Psicodiagnóstico Adulto", prerequisitos: ["Evaluación Psicométrica", "Evaluación Proyectiva"] },
    { id: "Intervención Clínica Infanto Juvenil", prerequisitos: ["Psicodiagnóstico Infanto Juvenil", "Psicopatología y Psicofarmacología Infanto Juvenil"] },
    { id: "Proyecto de Tesis", prerequisitos: ["Metodología y Análisis de Datos Cuantitativos", "Metodología y Análisis de Datos Cualitativo"] },
    { id: "Psicología de la Educación", prerequisitos: [] },
    { id: "Psicopatología y Psicofarmacología Adulto", prerequisitos: [] },
    { id: "Electivo de Ética", prerequisitos: [] },

    { id: "Desempeño Ético del Psicólogo", prerequisitos: [] },
    { id: "Intervención Clínica Adulto", prerequisitos: ["Psicodiagnóstico Adulto", "Psicopatología y Psicofarmacología Adulto"] },
    { id: "Seminario de Tesis (Ev. Ciclo)", prerequisitos: ["Proyecto de Tesis"] },
    { id: "Intervención Psicoeducativa en Contextos Escolares (A+S)", prerequisitos: ["Psicología de la Educación"] },
    { id: "Psicología Jurídica", prerequisitos: [] },
    { id: "Psicología de la Salud", prerequisitos: [] },

    { id: "Práctica Avanzada I", prerequisitos: [
      "Fundamentos Neuroanatómicos y Funcionales del Sistema Nervioso",
      "Fundamentos Socioculturales de la Psicología",
      "Procesos Psicológicos I",
      "Procesos Psicológicos II",
      "Neuropsicología",
      "Psicodiagnóstico Infanto Juvenil",
      "Psicodiagnóstico Adulto",
      "Psicopatología y Psicofarmacología Adulto",
      "Psicología de la Personalidad",
      "Psicología Social",
      "Psicología del Desarrollo I: Primera y Segunda Infancia",
      "Psicología del Desarrollo II: Adolescencia y Adultez",
      "Psicología Organizacional",
      "Psicología de la Educación",
      "Psicología Jurídica",
      "Psicología de la Salud",
      "Introducción a la Investigación en Psicología",
      "Proyecto de Tesis",
      "Evaluación Psicométrica",
      "Evaluación Proyectiva",
      "Intervención Psicosocial con Grupos",
      "Intervención Sociocomunitaria",
      "Intervención en Organizaciones",
      "Intervención Clínica Infanto Juvenil",
      "Intervención Clínica Adulto",
      "Intervención Psicoeducativa en Contextos Escolares (A+S)",
      "Seminario de Tesis (Ev. Ciclo)",
      "Teorías Psicológicas I",
      "Teorías Psicológicas II",
      "Teorías Psicológicas III",
      "Teorías Psicológicas IV"
    ] },
    { id: "Optativo de Especialidad I", prerequisitos: [] },
    { id: "Optativo de Especialidad II", prerequisitos: [] },

    { id: "Práctica Avanzada II (Ev. Ciclo)", prerequisitos: ["Práctica Avanzada I"] },
    { id: "Optativo de Especialidad III", prerequisitos: [] },
    { id: "Optativo de Especialidad IV", prerequisitos: [] }
  ];

  // bloquea los ramos con prerrequisitos
  cursos.forEach(curso => {
    const div = document.getElementById(curso.id);
    if (div) {
      div.classList.add("bloqueado");

      if (curso.prerequisitos.length === 0) {
        div.classList.remove("bloqueado");
      }

      div.addEventListener("click", () => {
        if (div.classList.contains("bloqueado")) return;

        div.classList.toggle("aprobado");

        // Verificar desbloqueos
        cursos.forEach(siguiente => {
          if (siguiente.prerequisitos.length > 0) {
            const todosAprobados = siguiente.prerequisitos.every(prereq => {
              const prereqDiv = document.getElementById(prereq);
              return prereqDiv && prereqDiv.classList.contains("aprobado");
            });
            const siguienteDiv = document.getElementById(siguiente.id);
            if (todosAprobados) {
              siguienteDiv?.classList.remove("bloqueado");
            } else {
              siguienteDiv?.classList.add("bloqueado");
            }
          }
        });
      });
    }
  });

});
