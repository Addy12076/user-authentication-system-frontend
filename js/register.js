let passwordInput = document.getElementById("password");
let strengthText = document.getElementById("strengthText");

// ✅ LIVE PASSWORD STRENGTH CHECK
passwordInput.addEventListener("keyup", function () {
  let password = passwordInput.value;

  let hasUpper = /[A-Z]/.test(password);
  let hasLower = /[a-z]/.test(password);
  let hasNumber = /[0-9]/.test(password);
  let hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  let score = 0;

  if (password.length >= 8) score++;
  if (hasUpper) score++;
  if (hasLower) score++;
  if (hasNumber) score++;
  if (hasSymbol) score++;

  if (password.length === 0) {
    strengthText.innerText = "";
  } 
  else if (score <= 2) {
    strengthText.innerText = "Weak Password ❌";
    strengthText.style.color = "red";
  } 
  else if (score === 3 || score === 4) {
    strengthText.innerText = "Medium Password ⚠️";
    strengthText.style.color = "orange";
  } 
  else {
    strengthText.innerText = "Strong Password ✅";
    strengthText.style.color = "green";
  }
});


// ✅ REGISTER FORM VALIDATION
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let cpassword = document.getElementById("cpassword").value;

  // Empty check
  if (name === "" || email === "" || password === "" || cpassword === "") {
    alert("All fields are required!");
    return;
  }

  // Password match
  if (password !== cpassword) {
    alert("Password and Confirm Password do not match!");
    return;
  }

  // ✅ Password Rules: Capital + Symbol + Min length
  let hasUpper = /[A-Z]/.test(password);
  let hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < 8) {
    alert("Password must be at least 8 characters long!");
    return;
  }

  if (!hasUpper) {
    alert("Password must contain at least 1 Capital letter (A-Z)!");
    return;
  }

  if (!hasSymbol) {
    alert("Password must contain at least 1 Symbol (!@#$...)!");
    return;
  }

  // ✅ Save user
  let user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration Successful ✅");
  window.location.href = "login.html";
});
