var numQues = 5;
var numChoi = 3;
var answers = new Array(3);
answers[0] = "a";
answers[1] = "a";
answers[2] = "c";
answers[3] = "b";
answers[4] = "c";
var currSelection;

function getScore(form) {
  var score = 0;
  var currElt;
  for (i = 0; i < numQues; i++) {
    currElt = i * numChoi;
    let answered = false;

    for (j = 0; j < numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        answered = true;
        if (currSelection.value == answers[i]) {
          document.getElementById(`ket-no${i}`).innerHTML = "<b style='color:green' class='benar' ></br> Jawaban Benar</b>";
          document.getElementById(`ket-no${i}`).style = "display:none ;color:green";
          score++;
        } else {
          document.getElementById(`ket-no${i}`).innerHTML = "<b style='color:red' class='salah'> </br>Jawaban Salah</b>";
          document.getElementById(`ket-no${i}`).style = "display:none; color:red";
        }
      }
    }
    if (answered === false) {
      document.getElementById("ket").innerHTML = "<b style='color:red'> Jawablah semua pertanyaan yang tersedia!</b>";
      return false;
    } else {
      document.getElementById("ket").innerHTML = "";
    }
  }

  var cek;

  for (k = 0; k < numQues * numChoi; k++) {
    if (form.elements[k].checked) {
      cek++;
    }
  }

  if (cek < numQues) {
  } else {
    for (l = 0; l < numQues; l++) {
      document.getElementById(`ket-no${l}`).style = "display:inline";
    }
  }

  document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("ket").innerHTML = "";
    document.getElementById("ket2").innerHTML = "";

    for (i = 0; i < answers.length; i++) {
      document.getElementById(`ket-no${i}`).innerHTML = "";
    }
  });
}

//Tabel Pengamatan
const benar = '<span style="color : green;">Anda Benar</span>';
const salah = '<span style="color : red;">Anda Salah</span>';

function cekBUap() {
  suap.checked = false;
  const cekUap = document.querySelector(".cekUap");
  cekUap.innerHTML = benar;
}
function cekSUap() {
  cekBUap.checked = false;
  const cekUap = document.querySelector(".cekUap");
  cekUap.innerHTML = salah;
}

function cekBSurya() {
  ssurya.checked = false;
  const cekSurya = document.querySelector(".cekSurya");
  cekSurya.innerHTML = benar;
}
function cekSGaya() {
  bsurya.checked = false;
  const cekSurya = document.querySelector(".cekSurya");
  cekSurya.innerHTML = salah;
}
function cekBAir() {
  sair.checked = false;
  const cekAir = document.querySelector(".cekAir");
  cekAir.innerHTML = benar;
}
function cekSAir() {
  cekBAir.checked = false;
  const cekAir = document.querySelector(".cekAir");
  cekAir.innerHTML = salah;
}

function cekBListrik() {
  slistrik.checked = false;
  const cekListrik = document.querySelector(".cekListrik");
  cekListrik.innerHTML = benar;
}
function cekSListrik() {
  cekBListrik.checked = false;
  const cekListrik = document.querySelector(".cekListrik");
  cekListrik.innerHTML = salah;
}
function cekBEnergi() {
  senergi.checked = false;
  const cekEnergi = document.querySelector(".cekEnergi");
  cekEnergi.innerHTML = benar;
}
function cekSEnergi() {
  benergi.checked = false;
  const cekEnergi = document.querySelector(".cekEnegi");
  cekEnergi.innerHTML = salah;
}

function cekYa() {
  const jawabcs1 = document.getElementById("jawabcs1");
  jawabcs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${salah}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        Silahkan pilih jawaban yang benar
                        </div>`;
}

function cekTidak() {
  const jawabcs1 = document.getElementById("jawabcs1");
  jawabcs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${benar}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        Tidak semua bahan dapat ditarik oleh Magnet
                        </div>`;
}

//video Mengamati
var video2_1 = document.getElementById("video2_1");
function setCurTime1_2(X) {
  if (X == 1) {
    video2_1.currentTime = 1;
  } else if (X == 2) {
    video2_1.currentTime = 3;
  } else if (X == 3) {
    video2_1.currentTime = 32;
  }
}

//video Mencoba
var video2_2 = document.getElementById("video2_2");
function setCurTime2_2(X) {
  if (X == 1) {
    video2_2.currentTime = 1;
  } else if (X == 2) {
    video2_2.currentTime = 60;
  }
}
