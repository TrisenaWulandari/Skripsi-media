// Js.Tampilan Kuis
let name = document.querySelector("#nama");
let kelas = document.querySelector("#kelas");
let password = document.querySelector("#password");
let btnSubmit = document.querySelector("#submit");

btnSubmit.addEventListener("click", function () {
  if (name.value === "" || kelas.value === "" || password.value === "") {
    alert("DATA MASIH KOSONG!");
  } else {
    if (password.value === "12") {
      sessionStorage.setItem("name", nama.value);
      sessionStorage.setItem("password", password.value);
      location.href = "/html/kuis_a.html";
    } else {
      alert("Password Salah!");
    }
  }
});
