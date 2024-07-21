document.addEventListener('DOMContentLoaded', function() {
  const loginOverlay = document.getElementById('login-overlay');
  const loginForm = document.getElementById('login-form');
  const cartLink = document.getElementById('cart-link');

  // Show login overlay on page load
  loginOverlay.style.display = 'flex';

  loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Here you would typically validate the login credentials
      // For this example, we'll just hide the overlay and show the cart link
      loginOverlay.style.display = 'none';
      cartLink.style.display = 'inline';
  });

  document.getElementById('detection-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const fileInput = document.getElementById('plant-image');
      const file = fileInput.files[0];
      if (file) {
          const formData = new FormData();
          formData.append('plant-image', file);
          // Replace with your API endpoint
          fetch('YOUR_API_ENDPOINT', {
              method: 'POST',
              body: formData
          })
          .then(response => response.json())
          .then(data => {
              document.getElementById('detection-result').innerText = JSON.stringify(data);
          })
          .catch(error => {
              console.error('Error:', error);
          });
      }
  });
});