// Modelo (Model)
const userModel = {
    username: "jefferson@mail.com",
    password: "123"
  };
  
  // Vista (View)
  const loginView = {
    showErrorMessage: function (message) {
      const messageDiv = document.getElementById("message");
      messageDiv.textContent = message;
      messageDiv.style.color = "red";
    },
    showSuccessMessage: function (message) {
      const messageDiv = document.getElementById("message");
      messageDiv.textContent = message;
      messageDiv.style.color = "green";
    }
  };
  
  // Controlador (Controller)
  const loginController = {
    handleLoginFormSubmit: function (event) {
      event.preventDefault();
      const username = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      if (username === userModel.username && password === userModel.password) {
        loginView.showSuccessMessage("Inicio de sesión exitoso. ¡Bienvenido, " + username + "!");
        // Aquí podrías redirigir al usuario a otra página o realizar otras acciones
        window.location.href = "index.html";
      } else {
        loginView.showErrorMessage("Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
      }
    }
  };

  
  // Asignar el controlador al evento 'submit' del formulario
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", loginController.handleLoginFormSubmit);



