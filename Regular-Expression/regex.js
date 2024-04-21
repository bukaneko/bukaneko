document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('emailForm');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Regex patterns for validation
      const namePattern = /^[a-zA-Z\s]*$/;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phonePattern = /^[0-9]{10,}$/;
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

      // Retrieve form inputs
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      // Validation error flags
      let hasError = false;

      // Name validation
      if (!namePattern.test(name)) {
          document.getElementById('nameError').innerText = "Invalid name";
          hasError = true;
      } else {
          document.getElementById('nameError').innerText = "";
      }

      // Email validation
      if (!emailPattern.test(email)) {
          document.getElementById('emailError').innerText = "Invalid email";
          hasError = true;
      } else {
          document.getElementById('emailError').innerText = "";
      }

      // Phone validation
      if (!phonePattern.test(phone)) {
          document.getElementById('phoneError').innerText = "Invalid phone number";
          hasError = true;
      } else {
          document.getElementById('phoneError').innerText = "";
      }

      // Password validation
      if (!passwordPattern.test(password)) {
          document.getElementById('passwordError').innerText = "Invalid password (must contain at least 8 characters, including uppercase, lowercase, and digits)";
          hasError = true;
      } else {
          document.getElementById('passwordError').innerText = "";
      }

      // Confirm password validation
      if (password !== confirmPassword) {
          document.getElementById('confirmPasswordError').innerText = "Passwords do not match";
          hasError = true;
      } else {
          document.getElementById('confirmPasswordError').innerText = "";
      }

      // If there's no error, submit the form
      if (!hasError) {
          form.submit();
      }
  });
});
