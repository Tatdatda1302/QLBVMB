document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".form.Sign.in form");
  const emailOrUsernameInput = document.getElementById("email");

  loginForm.addEventListener("submit", function (event) {
    const emailOrUsername = emailOrUsernameInput.value.trim();
    const password = document.querySelector(".password").value.trim();

    if (!isValidEmail(emailOrUsername) && !isValidUsername(emailOrUsername)) {
      alert("Please enter a valid email address or username.");
      event.preventDefault();
      return;
    }

    if (!isValidPassword(password)) {
      alert(
        "Password must be at least 6 characters long and contain both letters and numbers."
      );
      event.preventDefault();
      return;
    }
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidUsername(username) {
    return (
      username.length >= 6 && /\d/.test(username) && /[a-zA-Z]/.test(username)
    );
  }

  function isValidPassword(password) {
    return (
      password.length >= 6 && /\d/.test(password) && /[a-zA-Z]/.test(password)
    );
  }
});
