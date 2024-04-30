document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('.form.Sign.up form');
    const fullnameInput = document.querySelector('input[placeholder="Full name"]');
    const emailInput = document.querySelector('input[placeholder="Email address"]');
    const usernameInput = document.querySelector('input[placeholder="User name"]');
    const createPasswordInput = document.querySelector('input[placeholder="Create password"]');
    const confirmPasswordInput = document.querySelector('input[placeholder="Confirm password"]');
  
    signupForm.addEventListener('submit', function(event) {
      if (!isValidFullName(fullnameInput.value.trim())) {
        alert('Full name must start with a capital letter for each word.');
        event.preventDefault();
        return;
      }
  
      if (!isValidEmail(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
      }
  
      if (!isValidUsername(usernameInput.value.trim())) {
        alert('Username must be at least 6 characters long and contain both letters and numbers.');
        event.preventDefault();
        return;
      }
  
      if (!isValidPassword(createPasswordInput.value.trim())) {
        alert('Password must be at least 6 characters long and contain both letters and numbers.');
        event.preventDefault();
        return;
      }
  
      if (createPasswordInput.value.trim() !== confirmPasswordInput.value.trim()) {
        alert('Confirm password must match create password.');
        event.preventDefault();
        return;
      }
    });
  
    function isValidFullName(fullname) {
      const nameWords = fullname.split(' ');
      for (let word of nameWords) {
        if (!/^[A-Z]/.test(word)) {
          return false;
        }
      }
      return true;
    }
  
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    function isValidUsername(username) {
      return username.length >= 6 && /\d/.test(username) && /[a-zA-Z]/.test(username);
    }
  
    function isValidPassword(password) {
      return password.length >= 6 && /\d/.test(password) && /[a-zA-Z]/.test(password);
    }
  });
  