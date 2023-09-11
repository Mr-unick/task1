// Add client-side form validation here

const form = document.getElementById('contact-form');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    // Perform client-side validation (e.g., check email format)
    const email = form.querySelector('#email').value;
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

   
    form.style.display = 'none';
    confirmation.style.display = 'block';
});


function isValidEmail(email) {
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

