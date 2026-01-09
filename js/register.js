document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let cpassword = document.getElementById("cpassword").value;

  if (password !== cpassword) {
    alert("Passwords do not match");
    return;
  }

  let user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration successful");
  window.location.href = "login.html";
});
