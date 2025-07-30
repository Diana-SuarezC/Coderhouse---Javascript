const select = document.getElementById('zonaHoraria');
const reloj = document.getElementById('reloj');

  
const zonaGuardada = localStorage.getItem('zonaSeleccionada') || 'America/Bogota';
select.value = zonaGuardada;

function obtenerHoraZona(timeZone) {
    const ahora = new Date();
    return new Intl.DateTimeFormat('es-CO', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: timeZone
      }).format(ahora);
    }

function actualizarReloj() {
    const zona = select.value;
    const hora = obtenerHoraZona(zona);
    reloj.textContent = hora;
}

 
select.addEventListener('change', () => {
    const zona = select.value;
    localStorage.setItem('zonaSeleccionada', zona);
    actualizarReloj();
});


setInterval(actualizarReloj, 1000);

   
actualizarReloj();