// Redirect to login if not logged in
const user = localStorage.getItem('loggedInUser');
if (!user) {
  window.location.href = "./index.html";
}

document.getElementById('welcomeText').textContent = `Welcome, ${user}`;

const form = document.getElementById('paymentForm');
const status = document.getElementById('status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = "Processing...";
  status.style.color = "black";

  setTimeout(() => {
    const card = document.getElementById('card').value.replace(/\s/g, '');
    const amount = document.getElementById('amount').value;
    const lastDigit = parseInt(card.slice(-1));
    if (lastDigit % 2 === 0) {
      status.textContent = `Payment of ₹${amount} successful ✅`;
      status.style.color = "green";
    } else {
      status.textContent = "Payment failed ❌";
      status.style.color = "red";
    }
  }, 1500);
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('loggedInUser');
  window.location.href = "./index.html";
});
