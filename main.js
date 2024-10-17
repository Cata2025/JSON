console.log("Estoy conectada?")

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Captura los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;
    console.log(nombre);
    console.log(correo);
    console.log(mensaje);
    //Ahora vamos a crear el objeto
    const user={
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
    }
    //Ahora vamos a subirlo a LocalStorage
    localStorage.setItem("User",JSON.stringify(user));
 })


 // Función para mostrar los datos guardados en el DOM
function mostrarUsuarioGuardado() {
    const userDisplay = document.getElementById("userDisplay");
    const usuarioGuardado = localStorage.getItem("User");

    if (usuarioGuardado) {
        const usuarioObj = JSON.parse(usuarioGuardado); // Convertir a objeto
        userDisplay.innerHTML = `
            <p><strong>Nombre:</strong> ${usuarioObj.Nombre}</p>
            <p><strong>Correo:</strong> ${usuarioObj.Correo}</p>
            <p><strong>Mensaje:</strong> ${usuarioObj.Mensaje}</p>
        `;
    } else {
        userDisplay.innerHTML = "<p>No hay datos guardados</p>";
    }
}

// Llamar a la función al cargar la página
mostrarUsuarioGuardado();
