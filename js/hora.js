/* setInterval para actualizar la hora cada segundo - NO RECURSIVO */
const intervaloReloj = setInterval( () => {
  const fecha = new Date();
  document.getElementById("hora").innerText = fecha.toLocaleString();
}, 1000);