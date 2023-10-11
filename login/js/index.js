document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login");
    const message = document.getElementById("message");

    function validarUsuario(usuario) {
        return new Promise((resolve, reject) => {
            if (usuario.trim() === "") {
                reject("Por favor, ingrese su usuario.");
            } else {
                resolve();
            }
        });
    }

    function validarContraseña(contraseña) {
        return new Promise((resolve, reject) => {
            if (contraseña.trim() === "") {
                reject("Por favor, ingrese una contraseña.");
            } else {
                resolve();
            }
        });
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = form.username.value;
        const password = form.password.value;

        Promise.all([validarUsuario(username), validarContraseña(password)])
            .then(() => {
                if (username === "usuario" && password === "5789") {
                    message.innerText = "Bienvenido a tu perfil.";
                    message.style.color = "green";
                    form.reset();
                    alert("Bienvenido");
                } else {
                    message.innerText = "Usuario o contraseña incorrectos.";
                    message.style.color = "red";
                    alert("Error");
                }
            })
            .catch((errorMessage) => {
                message.innerText = errorMessage;
                message.style.color = "red";
            })
            .finally ( ()=>{
                message.classList.remove('hidden');
            }

            )
    });
});