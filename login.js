document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Email:', document.getElementById('loginEmail').value);
    console.log('Password:', document.getElementById('loginPassword').value);
    window.location.href = 'content.html';
  });
  