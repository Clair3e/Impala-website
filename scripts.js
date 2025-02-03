// Initialize EmailJS with your User ID
(function() {
  emailjs.init("E3Pv6Y18DPTK2krWf"); // Replace 'YOUR_USER_ID' with your EmailJS User ID
})();

// Listen for form submission
document.getElementById('order-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Send the form data using EmailJS
  emailjs.sendForm('service_q4jo4mb', 'template_zqm4qym', this) // Replace with your Service ID and Template ID
    .then(function() {
      alert('Order submitted successfully!'); // Success message
    }, function(error) {
      console.error('Failed to submit order:', error); // Log error to console for debugging
      alert('Failed to submit order. Please try again.'); // Error message
    });
});
