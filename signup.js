document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Full Name:', document.getElementById('signupFullName').value);
    console.log('Email:', document.getElementById('signupEmail').value);
    console.log('Password:', document.getElementById('signupPassword').value);
    window.location.href = 'login.html';
});
