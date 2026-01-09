if (!localStorage.getItem("isLoggedIn")) {
  window.location.href = "login.html";
}

let user = JSON.parse(localStorage.getItem("user"));

document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;

document.getElementById("saveBtn").addEventListener("click", function () {
  user.name = document.getElementById("name").value;
  user.email = document.getElementById("email").value;

  let newPass = document.getElementById("password").value;
  if (newPass !== "") {
    user.password = newPass;
  }

  localStorage.setItem("user", JSON.stringify(user));
  alert("Profile updated");
});
