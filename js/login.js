document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Get saved user data from localStorage
  let user = JSON.parse(localStorage.getItem("user"));

  // Check if user exists
  if (!user) {
    alert("No user found! Please register first.");
    window.location.href = "register.html";
    return;
  }

  // Validate credentials
  if (email === user.email && password === user.password) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Login successful ✅");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password ❌");
  }
});
