var loginButton = document.getElementById("loginButton");
var loginPopup = document.getElementById("loginPopup");
var closeButton = document.getElementById("closeButton");

loginButton.addEventListener("click", function() {
  loginPopup.style.display = "block";
});

closeButton.addEventListener("click", function() {
  loginPopup.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == loginPopup) {
    loginPopup.style.display = "none";
  }
});

var login = document.getElementById("login");

login.addEventListener("click", function() {
  // Lấy giá trị từ ô nhập tên tài khoản và mật khẩu
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Kiểm tra thông tin đăng nhập
  if (username === "admin" && password === "password") {
    alert("Đăng nhập thành công!");
  } else {
    alert("Đăng nhập thất bại!");
  }

  // Đóng khung đăng nhập
  loginPopup.style.display = "none";
});