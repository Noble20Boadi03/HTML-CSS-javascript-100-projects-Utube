
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessages = document.getElementById('errorMessages');

    errorMessages.innerHTML = '';

    let errors = [];

    if (!name) {
        errors.push('Name is required.');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        errors.push('Please enter a valid email.');
    }

    if (!phone || phone.length < 10 || isNaN(phone)) {
        errors.push('Please enter a valid phone number.');
    }

    if (!password || password.length < 6) {
        errors.push('Password must be at least 6 characters long.');
    }

    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join('<br>');
    } else {
        alert('Registration successful!');
        document.getElementById('registrationForm').reset();
    }
}
