function bukaIsi(evt, nmrIsi) {
  var i, isian, pilihan;
  isian = document.getElementsByClassName("isian");
  for (i = 0; i < isian.length; i++) {
    isian[i].style.display = "none";
  }
  pilihan = document.getElementsByClassName("pilihan");
  for (i = 0; i < pilihan.length; i++) {
    pilihan[i].className = pilihan[i].className.replace(" tombolaktif", "");
  }
  document.getElementById(nmrIsi).style.display = "block";
  evt.currentTarget.className += " tombolaktif";
}

function ftampil() {
  /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    console.log(dropdown.length);
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("js-top").style.display = "block";
  } else {
    document.getElementById("js-top").style.display = "none";
  }
};

function navcp(cp) {
  var x = document.getElementById(cp);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
}

function apersepsi(apersepsi) {
  var x = document.getElementById(apersepsi);

  if (x.className.indexOf("lost") == -1) {
    x.className += " lost";
  } else {
    x.className = x.className.replace("lost", "");
  }
}

function latihan(latihan) {
  var x = document.getElementById(latihan);

  if (x.className.indexOf("lost") == -1) {
    x.className += " lost";
  } else {
    x.className = x.className.replace("lost", "");
  }
}

function myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-green";
  } else {
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = x.previousElementSibling.className.replace(" w3-green", "");
  }
}

/// Tabel Pengamatan
const benar = '<span style="color : green;">Benar</span>';
const salah = '<span style="color : red;">Salah</span>';
// Besi
function BesiBenar() {
  if (document.getElementById("BesiB").checked) {
    document.getElementById("Besi").innerHTML = benar;
    $("#besiS").prop("checked", false);
  } else {
    document.getElementById("Besi").textContent = "";
  }
}
function BesiSalah() {
  if (document.getElementById("BesiS").checked) {
    document.getElementById("Besi").innerHTML = salah;
    $("#besiB").prop("checked", false);
  } else {
    document.getElementById("Besi").textContent = "";
  }
}
// Tembaga
function TembagaBenar() {
  if (document.getElementById("TembagaS").checked) {
    document.getElementById("Tembaga").innerHTML = salah;
    $("#tembagaB").prop("checked", false);
  } else {
    document.getElementById("Tembaga").textContent = "";
  }
}
function TembagaSalah() {
  if (document.getElementById("TembagaB").checked) {
    document.getElementById("Tembaga").innerHTML = benar;
    $("#tembagaS").prop("checked", false);
  } else {
    document.getElementById("Tembaga").textContent = "";
  }
}
// Alumunium
function AlumuniumBenar() {
  if (document.getElementById("AlumuniumB").checked) {
    document.getElementById("Alumunium").innerHTML = salah;
    $("#alumuniumS").prop("checked", false);
  } else {
    document.getElementById("Alumunium").textContent = "";
  }
}
function AlumuniumSalah() {
  if (document.getElementById("AlumuniumS").checked) {
    document.getElementById("Alumunium").innerHTML = benar;
    $("#alumuniumB").prop("checked", false);
  } else {
    document.getElementById("AlumuniumS").textContent = "";
  }
}

// Kertas
function KertasBenar() {
  if (document.getElementById("KertasB").checked) {
    document.getElementById("Kertas").innerHTML = salah;
    $("#kertasS").prop("checked", false);
  } else {
    document.getElementById("Kertas").textContent = "";
  }
}
function KertasSalah() {
  if (document.getElementById("KertasS").checked) {
    document.getElementById("Kertas").innerHTML = benar;
    $("#kertasB").prop("checked", false);
  } else {
    document.getElementById("Kertas").textContent = "";
  }
}
// Plastik
function PlastikBenar() {
  if (document.getElementById("plastikB").checked) {
    document.getElementById("Plastik").innerHTML = salah;
    $("#plastikS").prop("checked", false);
  } else {
    document.getElementById("Plastik").textContent = "";
  }
}
function KertasSalah() {
  if (document.getElementById("plastikS").checked) {
    document.getElementById("Plastik").innerHTML = benar;
    $("#plastikB").prop("checked", false);
  } else {
    document.getElementById("Plastik").textContent = "";
  }
}

// File Uplaod

function myFunction() {
  var x = document.getElementById("myFile");
  x.disabled = true;
}
