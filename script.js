document.getElementById('registrationForm').onsubmit = function(e) {
    // Prevent the form from submitting
    e.preventDefault();

    // Clear any previous error messages
    var errorElements = document.getElementsByClassName('error-message');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].innerText = '';
    }

    // Initialize isValid flag
    var isValid = true;

    // Username validation
    var username = document.getElementById('username').value;
    if (username.length < 5) {
        document.getElementById('errorUsername').innerText = 'Username must be at least 5 characters long.';
        isValid = false;
    }

    // Password validation
    var password = document.getElementById('password').value;
    if (password.length < 5) {
        document.getElementById('errorPassword').innerText = 'Password must be at least 5 characters long.';
        isValid = false;
    }

    // Confirm Password validation
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('errorPassword').innerText += ' Passwords do not match.';
        isValid = false;
    }

    // Gender validation
    if (!document.querySelector('input[name="gender"]:checked')) {
        document.getElementById('errorGender').innerText = 'Please select a gender.';
        isValid = false;
    }

    // Email validation
    var email = document.getElementById('email').value;
    if (!email) {
        document.getElementById('errorEmail').innerText = 'Email is required.';
        isValid = false;
    }

    // Contact Number validation
    var contactNumber = document.getElementById('contactNumber').value;
    if (contactNumber && isNaN(contactNumber)) {
        document.getElementById('errorContactNumber').innerText = 'Contact number must be numeric.';
        isValid = false;
    }

    // If all validations pass, redirect to thank you page
    if (isValid) {
        window.location.href = 'thank-you.html';
    }
};




