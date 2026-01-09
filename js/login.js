let generatedOtp;
let timer;
let timeLeft = 30;

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = JSON.parse(localStorage.getItem("user"));

  if (!user || email !== user.email || password !== user.password) {
    alert("Invalid credentials");
    return;
  }

  generatedOtp = Math.floor(1000 + Math.random() * 9000);
  alert("Your OTP is: " + generatedOtp); // demo

  document.getElementById("otpSection").style.display = "block";
  startOtpTimer();
});

function startOtpTimer() {
  timeLeft = 30;
  document.getElementById("otpTimer").innerText = `Time left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("otpTimer").innerText = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("OTP expired");
      document.getElementById("otpSection").style.display = "none";
    }
  }, 1000);
}

document.getElementById("verifyOtpBtn").addEventListener("click", function () {
  let enteredOtp = document.getElementById("otpInput").value;

  if (enteredOtp == generatedOtp) {
    clearInterval(timer);
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong OTP");
  }
});
