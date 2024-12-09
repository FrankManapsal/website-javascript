document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) { // Only add event listener if form exists
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Display success message dynamically
      const successMessage = document.createElement('p');
      successMessage.textContent = 'Thank you for your submission! We will get back to you soon.';
      successMessage.style.color = 'green';
      successMessage.style.marginTop = '10px';
      successMessage.setAttribute('id', 'successMessage'); // Optional for reusability

      // Insert the success message above the form or elsewhere
      contactForm.parentNode.insertBefore(successMessage, contactForm);

      // Reset form fields
      contactForm.reset();

      // Optionally, remove the success message after a few seconds
      setTimeout(() => {
        if (successMessage.parentNode) {
          successMessage.parentNode.removeChild(successMessage);
        }
      }, 5000); // Adjust time (5000ms = 5 seconds) as needed
    });

    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  }
});
