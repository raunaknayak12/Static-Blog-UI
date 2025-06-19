// script.js

document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");
  const loginForm = document.getElementById("login-form");
  const authSection = document.getElementById("auth-section");
  const loginSection = document.getElementById("login-section");
  const homeSection = document.getElementById("home-section");
  const toLoginLink = document.getElementById("to-login-link");
  const toRegisterLink = document.getElementById("to-register-link");
  const registerMsg = document.getElementById("register-msg");
  const loginMsg = document.getElementById("login-msg");

  let registeredUsers = {}; // Store credentials temporarily

  // Handle registration
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("register-username").value.trim();
    const password = document.getElementById("register-password").value;

    if (username in registeredUsers) {
      registerMsg.textContent = "⚠️ The credentials are already logged in.";
      registerMsg.style.color = "red";
    } else if (password.length < 8) {
      registerMsg.textContent = "⚠️ Password must be at least 8 characters.";
      registerMsg.style.color = "red";
    } else {
      registeredUsers[username] = password;
      authSection.style.display = "none";
      homeSection.style.display = "block";
    }
  });

  // Switch to Login section
  toLoginLink.addEventListener("click", function () {
    authSection.style.display = "none";
    loginSection.style.display = "block";
  });

  // Switch back to Register section
  toRegisterLink.addEventListener("click", function () {
    loginSection.style.display = "none";
    authSection.style.display = "block";
  });

  // Handle login
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;

    if (registeredUsers[username] && registeredUsers[username] === password) {
      loginSection.style.display = "none";
      homeSection.style.display = "block";
    } else {
      loginMsg.textContent = "❌ Invalid credentials.";
      loginMsg.style.color = "red";
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const registerSection = document.getElementById("auth-section");
  const loginSection = document.getElementById("login-section");

  const toLoginLink = document.getElementById("to-login-link");
  const toRegisterLink = document.getElementById("to-register-link");

  // Show Login, Hide Register
  toLoginLink.addEventListener("click", function (e) {
    e.preventDefault();
    registerSection.style.display = "none";
    loginSection.style.display = "block";
  });

  // Show Register, Hide Login
  toRegisterLink.addEventListener("click", function (e) {
    e.preventDefault();
    loginSection.style.display = "none";
    registerSection.style.display = "block";
  });
});
