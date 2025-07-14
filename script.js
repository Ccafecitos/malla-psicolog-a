document.querySelectorAll('.ramo').forEach((ramo) => {
  ramo.addEventListener('click', () => {
    if (!ramo.classList.contains('bloqueado')) {
      ramo.classList.toggle('aprobado');
    }
  });
});
