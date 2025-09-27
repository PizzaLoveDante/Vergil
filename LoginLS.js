
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Lấy dữ liệu đã lưu trong Local Storage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
      alert("Đăng nhập thành công!");
      window.location.href = "home.html"; // chuyển đến trang chính
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
  });
