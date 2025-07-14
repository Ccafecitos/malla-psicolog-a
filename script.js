document.addEventListener("DOMContentLoaded", () => {
  const ramos = [
    // Semestre 1
    { nombre: 'Fundamentos Neuroanatómicos y Funcionales del Sistema Nervioso', prerequisitos: [] },
    { nombre: 'Fundamentos Socioculturales de la Psicología', prerequisitos: [] },
    { nombre: 'Procesos Psicológicos I', prerequisitos: [] },
    { nombre: 'Taller de Habilidades Profesionales I', prerequisitos: [] },
    { nombre: 'Introducción a la Psicología', prerequisitos: [] },
    { nombre: 'Electivo de Comunicación', prerequisitos: [] },

    // Semestre 2
    { nombre: 'Epistemología Aplicada a la Psicología', prerequisitos: [] },
    { nombre: 'Introducción a la Neurociencia', prerequisitos: ['Fundamentos Neuroanatómicos y Funcionales del Sistema Nervioso'] },
    { nombre: 'Procesos Psicológicos II', prerequisitos: ['Procesos Psicológicos I'] },
    { nombre: 'Taller de Habilidades Profesionales II', prerequisitos: ['Taller de Habilidades Profesionales I'] },
    { nombre: 'Electivo de Comunicación', prerequisitos: [] },

    // Semestre 3
    { nombre: 'Neuropsicología', prerequisitos: ['Introducción a la Neurociencia'] },
    { nombre: 'Psicología de la Personalidad', prerequisitos: [] },
    { nombre: 'Psicología Social', prerequisitos: [] },
    { nombre: 'Psicología del Desarrollo I: Primera y Segunda Infancia', prerequisitos: [] },
    { nombre: 'Teorías Psicológicas I', prerequisitos: [] },
    { nombre: 'Electivo de Desarrollo del Pensamiento', prerequisitos: [] },

    // Semestre 4
    { nombre: 'Evaluación Psicométrica', prerequisitos: ['Psicología de la Personalidad'] },
    { nombre: 'Intervención Psicosocial con Grupos', prerequisitos: ['Psicología Social'] },
    { nombre: 'Introducción a la Investigación en Psicología', prerequisitos: [] },
    { nombre: 'Psicología del Desarrollo II: Adolescencia y Adultez', prerequisitos: [] },
    { nombre: 'Teorías Psicológicas II', prerequisitos: [] },

    // Semestre 5
    { nombre: 'Evaluación Proyectiva', prerequisitos: ['Evaluación Psicométrica'] },
    { nombre: 'Intervención Sociocomunitaria', prerequisitos: ['Intervención Psicosocial con Grupos'] },
    { nombre: 'Metodología y Análisis de Datos Cuantitativos', prerequisitos: ['Introducción a la Investigación en Psicología'] },
    { nombre: 'Psicología Organizacional', prerequisitos: [] },
    { nombre: 'Teorías Psicológicas III', prerequisitos: [] },
    { nombre: 'Electivo de Desarrollo Personal', prerequisitos: [] },

    // Semestre 6
    { nombre: 'Psicodiagnóstico Infanto Juvenil', prerequisitos: ['Evaluación Psicométrica', 'Evaluación Proyectiva'] },
    { nombre: 'Intervención en Organizaciones', prerequisitos: ['Psicología Organizacional'] },
    { nombre: 'Metodología y Análisis de Datos Cualitativo', prerequisitos: ['Introducción a la Investigación en Psicología'] },
    { nombre: 'Psicopatología y Psicofarmacología Infanto Juvenil', prerequisitos: [] },
    { nombre: 'Teorías Psicológicas IV', prerequisitos: [] },
    { nombre: 'Electivo de Responsabilidad Social', prerequisitos: [] },

    // Semestre 7
    { nombre: 'Psicodiagnóstico Adulto', prerequisitos: ['Evaluación Psicométrica', 'Evaluación Proyectiva'] },
    { nombre: 'Intervención Clínica Infanto Juvenil', prerequisitos: ['Psicodiagnóstico Infanto Juvenil', 'Psicopatología y Psicofarmacología Infanto Juvenil'] },
    { nombre: 'Proyecto de Tesis', prerequisitos: ['Metodología y Análisis de Datos Cuantitativos', 'Metodología y Análisis de Datos Cualitativo'] },
    { nombre: 'Psicología de la Educación', prerequisitos: [] },
    { nombre: 'Psicopatología y Psicofarmacología Adulto', prerequisitos: [] },
    { nombre: 'Electivo de Ética', prerequisitos: [] },

    // Semestre 8
    { nombre: 'Desempeño Ético del Psicólogo', prerequisitos: [] },
    { nombre: 'Intervención Clínica Adulto', prerequisitos: ['Psicodiagnóstico Adulto', 'Psicopatología y Psicofarmacología Adulto'] },
    { nombre: 'Seminario de Tesis (Ev. Ciclo)', prerequisitos: ['Proyecto de Tesis'] },
    { nombre: 'Intervención Psicoeducativa en Contextos Escolares (A+S)', prerequisitos: ['Psicología de la Educación'] },
    { nombre: 'Psicología Jurídica', prerequisitos: [] },
    { nombre: 'Psicología de la Salud', prerequisitos: [] },

    // Semestre 9
    { nombre: 'Práctica Avanzada I', prerequisitos: [
      'Fundamentos Neuroanatómicos y Funcionales del Sistema Nervioso',
      'Fundamentos Socioculturales de la Psicología',
      'Procesos Psicológicos I',
      'Procesos Psicológicos II',
      'Neuropsicología',
      'Psicodiagnóstico Infanto Juvenil',
      'Psicodiagnóstico Adulto',
      'Psicopatología y Psicofarmacología Adulto',
      'Psicología de la Personalidad',
      'Psicología Social',
      'Psicología del Desarrollo I: Primera y Segunda Infancia',
      'Psicología del Desarrollo II: Adolescencia y Adultez',
      'Psicología Organizacional',
      'Psicología de la Educación',
      'Psicología Jurídica',
      'Psicología de la Salud',
      'Introducción a la Investigación en Psicología',
      'Proyecto de Tesis',
      'Evaluación Psicométrica',
      'Evaluación Proyectiva',
      'Intervención Psicosocial con Grupos',
      'Intervención Sociocomunitaria',
      'Intervención en Organizaciones',
      'Intervención Clínica Infanto Juvenil',
      'Intervención Clínica Adulto',
      'Intervención Psicoeducativa en Contextos Escolares (A+S)',
      'Seminario de Tesis (Ev. Ciclo)',
      'Teorías Psicológicas I',
      'Teorías Psicológicas II',
      'Teorías Psicológicas III',
      'Teorías Psicológicas IV'
    ] },
    { nombre: 'Optativo de Especialidad I', prerequisitos: [] },
    { nombre: 'Optativo de Especialidad II', prerequisitos: [] },

    // Semestre 10
    { nombre: 'Práctica Avanzada II (Ev. Ciclo)', prerequisitos: ['Práctica Avanzada I'] },
    { nombre: 'Optativo de Especialidad III', prerequisitos: [] },
    { nombre: 'Optativo de Especialidad IV', prerequisitos: [] }
  ];

  const aprobados = new Set();

  function actualizarBloqueos() {
    ramos.forEach(ramo => {
      document.querySelectorAll('.ramo').forEach(div => {
        const texto = div.textContent.trim();
        if (texto === ramo.nombre) {
          if (ramo.prerequisitos.every(pr => aprobados.has(pr))) {
            div.classList.remove('bloqueado');
          } else if (ramo.prerequisitos.length > 0) {
            div.classList.add('bloqueado');
          } else {
            div.classList.remove('bloqueado');
          }
        }
      });
    });
  }

  document.querySelectorAll('.ramo').forEach(div => {
    div.addEventListener('click', () => {
      if (div.classList.contains('bloqueado')) return;
      div.classList.toggle('aprobado');
      const texto = div.textContent.trim();

      if (div.classList.contains('aprobado')) {
        aprobados.add(texto);
      } else {
        aprobados.delete(texto);
      }
      actualizarBloqueos();
    });
  });

  actualizarBloqueos();
});
