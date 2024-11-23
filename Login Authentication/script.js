// Predefined credentials (for demo purposes only; use secure methods in production)
const validUsername = "admin";
const validPassword = "password123";

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  if (username === validUsername && password === validPassword) {
    errorMsg.textContent = "";
    alert("Login successful!");
    // Redirect or perform desired actions
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
});
