 function chonBacSi(name) {
      document.getElementById("selectedDoctor").value = name;
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    function resetForm() {
      document.getElementById("selectedDoctor").value = "";
      document.getElementById("date").value = "";
      document.getElementById("time").value = "";
      document.getElementById("clientName").value = "";
      document.getElementById("petName").value = "";
    }

    function xacNhan() {
      const doctor = document.getElementById("selectedDoctor").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const client = document.getElementById("clientName").value;
      const pet = document.getElementById("petName").value;

      if (!doctor || !date || !time || !client || !pet) {
        alert("⚠️ Vui lòng điền đầy đủ thông tin!");
        return;
      }

      alert(`✅ Lịch hẹn thành công!\n\nBác sĩ: ${doctor}\nNgày: ${date}\nGiờ: ${time}\nKhách hàng: ${client}\nThú cưng: ${pet}`);
      resetForm();
    }