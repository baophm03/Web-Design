var registerButton = document.getElementById("registerButton");
var loginButton = document.getElementById("loginButton");

closeButton.addEventListener("click", function() {
  loginPopup.style.display = "none";
  window.location.href = "project.html"; // Điều hướng sang trang khác khi bấm nút đóng
});

loginButton.addEventListener("click", function() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var remember = document.getElementById("remember").checked;

  // Xử lý đăng nhập ở đây (gửi dữ liệu đăng nhập đến máy chủ, kiểm tra và trả về kết quả)
  // Ví dụ:
  if (username === "admin" && password === "password") {
    alert("Đăng nhập thành công!");
  } else {
    alert("Đăng nhập thất bại!");
  }
});