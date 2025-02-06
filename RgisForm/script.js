
function validateform() {
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const phone = document.getElementById('phone').value.trim();
const password = document.getElementById('password').value.trim();
const errormessages = document.getElementById('errormessages');

errormessages.innerHTML = '';

let errors = [];

if (!name){
    errors.push('Enter your name');
}

const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
if (!email || !emailpattern.test(email)) {
    errors.push('Enter a valid Email');
}

if(!phone || phone.length < 10 || isNaN(phone)) {
    errors.push('Enter a valid phone');
}

if (!password || password.length < 6) {
    errors.push('Password must be at least 6 characters');
}

if (errors.length > 0) {
    errormessages.innerHTML = errors.join('<br>');
} else {
    alert('Registration Succesful!');
    document.getElementById('formBody').reset();
}
}