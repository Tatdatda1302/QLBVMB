document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordForm = document.querySelector('.form.Forgot.Password form');
    const emailInput = document.getElementById('email');
  
    forgotPasswordForm.addEventListener('submit', function(event) {
      const email = emailInput.value.trim();
  
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
      }
    });
  
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  });
  