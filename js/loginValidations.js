const form = document.getElementById("loginForm");
const emailInput = document.getElementById("contacto");
const passwordInput = document.getElementById("password");
const emailLabel = document.getElementById("contactoLabel");
const passwordLabel = document.getElementById("passwordLabel");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (e) => {
  // Prevenir el comportamiento por defecto del formulario
  e.preventDefault();

  // Limpiar mensajes de error
  emailInput.classList.remove("error-input");
  passwordInput.classList.remove("error-input");
  emailLabel.classList.remove("error-label");
  passwordLabel.classList.remove("error-label");
  emailError.style.display = "none";
  passwordError.style.display = "none";

  // Variable para controlar errores
  let esError = false;

  // Validar email
  if (emailInput.value.trim() === "") {
    emailInput.classList.add("error-input");
    emailLabel.classList.add("error-label");
    emailError.textContent = "Campo vacío";
    emailError.style.display = "block";
    esError = true;
  }

  // Validar contraseña
  if (passwordInput.value.trim() === "") {
    passwordInput.classList.add("error-input");
    passwordLabel.classList.add("error-label");
    passwordError.textContent = "Campo vacío";
    passwordError.style.display = "block";
    hasError = true;
  }

  // Si hay errores, no enviar el formulario --> para que no lo envíe si está vacio... Da positivo si los dos campos están con informacion
  if (esError) return;

  alert("Bienvenid@, Redirigiendo...");
  window.location.href = "index.html";
});
