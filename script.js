document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorElement = document.getElementById('password-error');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (passwordInput.value !== confirmPasswordInput.value) {
            errorElement.textContent = 'Passwords do not match';
        } else {
            errorElement.textContent = '';
            console.log('Form submitted successfully');
        }
    });
});