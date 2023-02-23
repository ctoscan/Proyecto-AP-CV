
function enviar() {
  const nombre=document.getElementById("fname").value
  const apellido=document.getElementById("lname").value
  const devolucion=document.querySelector('input[name="devolucion"]:checked').value;
  const calificacion=document.querySelector('input[name="calificacion"]:checked').value;
  alert(`Informacion enviada. 
  nombre: ${nombre}
  apellido: ${apellido}
  devolucion: ${devolucion}
  calificacion: ${calificacion}
  `)
}

function goto() {
  window.open("https://www.w3schools.com");
}

function video() {
    document.location='Videos/EL INSPECTOR ARDILLA INTRO.mp4'
}