const passwordInput = document.querySelector("#password");
const eye = document.querySelector("#eye");

eye.addEventListener("click", function () {
  this.classList.toggle("fa-eye-slash");
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
});
// ##################### Validate ###########################

// Get the input elements and error elements
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

// Define a function to validate the form
function validateForm() {
  // Reset the error messages
  emailError.textContent = "";
  passwordError.textContent = "";

  // Check if the email is valid
  if (!email.validity.valid) {
    // If not, display an error message
    emailError.textContent = "Please enter a valid email address.";
    // Prevent the form from being submitted
    return false;
  }

  // Check if the password is valid
  if (!password.validity.valid) {
    // If not, display an error message
    passwordError.textContent =
      "Please enter a password with at least 8 characters.";
    // Prevent the form from being submitted
    return false;
  }

  // If all inputs are valid, allow the form to be submitted
  return true;
}