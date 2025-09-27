document.addEventListener("DOMContentLoaded", () => {
  // ==== Đăng nhập ====
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;

      const savedUsername = localStorage.getItem("username");
      const savedPassword = localStorage.getItem("password");

      if (username === "" || password === "") {
        alert("Vui lòng nhập đủ thông tin!");
      } else if (username === savedUsername && password === savedPassword) {
        alert("Đăng nhập thành công!");
        window.location.href = "index.html"; 
      } else {
        alert("Sai tên đăng nhập hoặc mật khẩu!");
      }
    });
  }

  // ==== Đăng ký ====
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("reg-username").value;
      const password = document.getElementById("reg-password").value;
      const confirm = document.getElementById("reg-confirm").value;

      if (username === "" || password === "" || confirm === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
      } else if (password !== confirm) {
        alert("Mật khẩu xác nhận không khớp!");
      } else {
   
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        alert("Đăng ký thành công! Mời bạn đăng nhập.");
        window.location.href = "login.html";
      }
    });
  }
});
