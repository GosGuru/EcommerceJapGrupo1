document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const input = document.getElementById("contacto");
  const label = document.getElementById("contactoLabel");
  const errorMsg = document.getElementById("error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset de estilos
    input.classList.remove("error-input");
    label.classList.remove("error-label");
    errorMsg.style.display = "none";
    errorMsg.textContent = "";

    // Validación --> solo si está vacío
    if (input.value.trim() === "") {
      input.classList.add("error-input");
      label.classList.add("error-label");
      errorMsg.textContent = "Campo vacío";
      errorMsg.style.display = "block";
      return;
    }

    // Si el campo no está vacio --> Alert "bienvenido" + Redireccionamiento

    alert("Bienvenid@, Redirigiendo...");
    window.location.href = "../categories.html";
  });
});
