async function calculate() {
  let expr = document.getElementById("expression").value;
  if (!expr) {
    document.getElementById("result").textContent = "Vui lòng nhập phép tính";
    return;
  }
  try {
    let response = await fetch(`https://api.mathjs.org/v4/?expr=${encodeURIComponent(expr)}`);
    let result = await response.text();
    document.getElementById("result").textContent = result;
  } catch {
    document.getElementById("result").textContent = "Lỗi tính toán!";
  }
}

function clearCalc() {
  document.getElementById("expression").value = "";
  document.getElementById("result").textContent = "";
}


