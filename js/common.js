let navLinks = document.getElementById("navLinks");
let welcomeText = document.getElementById("welcomeText");

let isLoggedIn = localStorage.getItem("isLoggedIn");
let user = JSON.parse(localStorage.getItem("user"));

if (isLoggedIn && user) {
  navLinks.innerHTML = `
    <a href="dashboard.html" class="btn btn-success me-2">Dashboard</a>
    <a href="logout.html" class="btn btn-danger">Logout</a>
  `;
  welcomeText.innerText = `Welcome ${user.email}`;
} else {
  navLinks.innerHTML = `
    <a href="login.html" class="btn btn-primary me-2">Login</a>
    <a href="register.html" class="btn btn-warning">Register</a>
  `;
}
