document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const status = document.getElementById('loginStatus');

  if (!email || !password) {
    status.textContent = "Please fill all fields.";
    status.style.color = "red";
    return;
  }

  // Fake login process
  status.textContent = "Logging in...";
  setTimeout(() => {
    localStorage.setItem('loggedInUser', email);
    window.location.href = "./payment.html";  // ✅ Correct relative path
  }, 1000);
});
