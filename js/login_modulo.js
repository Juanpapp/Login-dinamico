const formLogin = document.querySelector(".form-login");
const inputPass = document.querySelector('.form-login input[type="password"]');
const inputEmail = document.querySelector('.form-login input[type="email"]');
const alertaErrorLogin = document.querySelector(".form-login .alerta-error");
const alertaExitoLogin = document.querySelector(".form-login .alerta-exito");

document.addEventListener("DOMContentLoaded", () => {
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Validar que los campos no estén vacíos
        if (inputEmail.value.trim() === "" || inputPass.value.trim() === "") {
            alertaErrorLogin.textContent = "Todos los campos son obligatorios";
            alertaErrorLogin.classList.add("alertaError");
            setTimeout(() => {
                alertaErrorLogin.classList.remove("alertaError");
            }, 3000);
            return;
        }

        const formData = new FormData(formLogin);
        fetch('php/login_db.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data.includes("Inicio de sesión exitoso")) {
                alertaExitoLogin.classList.add("alertaExito");
                alertaErrorLogin.classList.remove("alertaError");
                setTimeout(() => {
                    window.location.href = "welcome.php"; // Redirige a la página de bienvenida
                }, 2000);
            } else {
                alertaErrorLogin.textContent = data; // Mostrar el mensaje de error específico
                alertaErrorLogin.classList.add("alertaError");
                alertaExitoLogin.classList.remove("alertaExito");
                setTimeout(() => {
                    alertaErrorLogin.classList.remove("alertaError");
                }, 3000);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alertaErrorLogin.textContent = "Hubo un error, intenta nuevamente";
            alertaErrorLogin.classList.add("alertaError");
            setTimeout(() => {
                alertaErrorLogin.classList.remove("alertaError");
            }, 3000);
        });
    });
});