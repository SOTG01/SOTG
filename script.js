document.addEventListener('DOMContentLoaded', function() {
  const authOverlay = document.getElementById('auth-overlay');
  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');
  const cartLink = document.getElementById('cart-link');
  const logoutLink = document.getElementById('logout-link');
  const switchToLoginLink = document.getElementById('switch-to-login');
  const switchToRegisterLink = document.getElementById('switch-to-register');
  const registerFormContainer = document.getElementById('register-form-container');
  const loginFormContainer = document.getElementById('login-form-container');

  // Check if user is logged in
  if (!isLoggedIn()) {
      authOverlay.style.display = 'flex';
  } else {
      showLoggedInState();
  }

  // Switch between register and login forms
  switchToLoginLink.addEventListener('click', function(e) {
      e.preventDefault();
      registerFormContainer.style.display = 'none';
      loginFormContainer.style.display = 'block';
  });

  switchToRegisterLink.addEventListener('click', function(e) {
      e.preventDefault();
      loginFormContainer.style.display = 'none';
      registerFormContainer.style.display = 'block';
  });

  // Handle registration
  registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('reg-username').value;
      const email = document.getElementById('reg-email').value;
      const password = document.getElementById('reg-password').value;
      const userType = document.getElementById('reg-user-type').value;

      // Here you would typically send this data to your server to create a new user
      console.log('Registration:', { username, email, password, userType });

      // For this example, we'll just switch to the login form
      registerFormContainer.style.display = 'none';
      loginFormContainer.style.display = 'block';
  });

  // Handle login
  loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      // Here you would typically validate the login credentials with your server
      console.log('Login:', { email, password });

      // For this example, we'll just hide the overlay and show the logged-in state
      login();
  });

  // Handle logout
  if (logoutLink) {
      logoutLink.addEventListener('click', function(e) {
          e.preventDefault();
          logout();
      });
  }

  // Plant App functionality
  const detectionForm = document.getElementById('detection-form');
  if (detectionForm) {
      detectionForm.addEventListener('submit', function(e) {
          e.preventDefault();
          if (!isLoggedIn()) {
              alert('Please log in to use the Plant App.');
              return;
          }
          // Here you would typically send the image to your server for analysis
          console.log('Plant image submitted for analysis');
          document.getElementById('detection-result').innerText = 'Analysis in progress...';
