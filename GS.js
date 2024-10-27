document.getElementById('forgot-password').addEventListener('click', function() {
    alert('Redirecting to Forgot Password page...');
    window.location.href = 'forgot-password.html';
});

document.getElementById('submit').addEventListener('click', function() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
        alert('Please enter both email and password.');
    } else if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
    } else {
      
        const submitButton = document.getElementById('submit');
        submitButton.innerHTML = 'Loading...';
        submitButton.disabled = true;

       
        setTimeout(() => {
            alert('Login successful! Email: ' + email);
            // Redirect or other actions here
            submitButton.innerHTML = 'Submit';
            submitButton.disabled = false;
        }, 2000);
    }
});
