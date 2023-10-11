document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");
    const tablaEmpleados = document.getElementById("tabla-empleados");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        let nombre = document.querySelector('#nombre');
        let cedula = document.querySelector('#cedula');
        let celular = document.querySelector('#celular');
        let correo = document.querySelector('#correo');
        let contrasena = document.querySelector('#contrasena');
        let confirmacionContrasena = document.querySelector('#confirmacion');
        let seguridadSocial = document.querySelector('#seguridad');
        let fechaNacimiento = document.querySelector('#fecha-nacimiento');
        let fechaInicioContrato = document.querySelector('#fecha-inicio-contrato');
        let fechaTerminacionContrato = document.querySelector('#fecha-terminacion-contrato');

        // Validaciones
        if (nombre.value.length === 0 ||
            cedula.value.length === 0 ||
            celular.value.length === 0 ||
            correo.value.length === 0 ||
            contrasena.value.length === 0 ||
            confirmacionContrasena.value.length === 0 ||
            seguridadSocial.value.length === 0 ||
            fechaNacimiento.value.length === 0 ||
            fechaInicioContrato.value.length === 0 ||
            fechaTerminacionContrato.value.length === 0) {
            alert('Por favor, complete todos los campos.');
            return;
        }
        const nombreCompletoRegex = /^[A-Za-z\s]+$/;
        if (!nombreCompletoRegex.test(nombre.value)) {
            alert('El nombre completo debe contener solo letras y espacios. Por favor, verifique.');
            return;
        }

        if (isNaN(cedula.value)) {
            alert('La cédula solo debe contener números. verifique.');
            return;
        }

        if (isNaN(celular.value)) {
            alert('El número de teléfono solo debe contener números.  verifique.');
            return;
        }

        if (contrasena.value !== confirmacionContrasena.value) {
            alert('La contraseña y su confirmación no coinciden. verifique.');
            return;
        }
        // Validación de fecha de nacimiento
        const fechaNacimientoIngresada = new Date(fechaNacimiento.value);
        const fechaMinima = new Date();
        fechaMinima.setFullYear(fechaMinima.getFullYear() - 18); 

        if (fechaNacimientoIngresada > fechaMinima) {
            alert('Debe ser mayor de 18 años para registrarse.');
            return;
        }
        // Validación de correo electrónico
        const correoRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!correoRegex.test(correo.value)) {
            alert('Por favor, ingrese una dirección de correo electrónico válida.');
            return;
        }

        // Crear una nueva fila en la tabla con los datos del empleado
        const fila = document.createElement("tr");
        fila.innerHTML = `
  
        <td>${nombre.value}</td>
        <td>${cedula.value}</td>
        <td>${correo.value}</td>
        <td>${celular.value}</td>
        <td>${fechaNacimiento.value}</td>
        <td>${seguridadSocial.value}</td>
      `;

        // Agregar la fila a la tabla
        tablaEmpleados.appendChild(fila);

        // Limpiar el formulario después de agregar un empleado
        formulario.reset();

        Swal.fire(
            'Empleado registrado correctamente',
            '',
            'success'
          )
    });
});


