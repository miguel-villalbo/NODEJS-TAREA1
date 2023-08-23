function mostrarDatos() {
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var mensaje = document.getElementById('mensaje').value;

    var datosCompletos = "Nombres: " + nombres +
                         "\nApellidos: " + apellidos +
                         "\nTel: " + telefono +
                         "\nEmail: " + email +
                         "\nFecha: " + fechaNacimiento +
                         "\nMensaje: " + mensaje;

    alert(datosCompletos);
}
