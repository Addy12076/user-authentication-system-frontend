if (!localStorage.getItem("isLoggedIn")) {
  window.location.href = "login.html";
}

let user = JSON.parse(localStorage.getItem("user"));
document.getElementById("userInfo").innerText = `Welcome ${user.name}`;
