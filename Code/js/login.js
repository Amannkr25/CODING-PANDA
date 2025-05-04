document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Input Fields
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const rememberMe = document.getElementById("rememberMe");
  
    // Error Messages
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
  
    let isValid = true;
  
    // Username Validation
    if (username.value.trim() === "") {
      usernameError.classList.remove("hidden");
      isValid = false;
    } else {
      usernameError.classList.add("hidden");
    }
  
    // Password Validation
    if (password.value.trim() === "") {
      passwordError.classList.remove("hidden");
      isValid = false;
    } else {
      passwordError.classList.add("hidden");
    }
  
    // If valid, proceed with login
    if (isValid) {
      alert(
        `Welcome, ${username.value}! ${rememberMe.checked ? "We'll remember you." : ""}`
      );
      // Perform further login logic here
      // Redirect to another page or make an API call
    }
  });
  