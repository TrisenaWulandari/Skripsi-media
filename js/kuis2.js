// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCplY14r_usHBnV0q4fN9yLFB17F0rFcY4",
  authDomain: "skripsi-1ebb7.firebaseapp.com",
  databaseURL: "https://skripsi-1ebb7-default-rtdb.firebaseio.com",
  projectId: "skripsi-1ebb7",
  storageBucket: "skripsi-1ebb7.appspot.com",
  messagingSenderId: "95532009828",
  appId: "1:95532009828:web:692b1f60263f77340ad271",
  measurementId: "G-2X999JFXEX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const db = getDatabase();

//referensi//
let namalink = document.getElementById("namalink");
let nisnlink = document.getElementById("nisnlink");
// let kelaslink = document.getElementById("kelaslink");

let nama = sessionStorage.getItem("nama");
let nisn = sessionStorage.getItem("nisn");
// let kelas = sessionStorage.getItem("kelas");
namalink.innerText = nama;
nisnlink.innerText = nisn;
// kelaslink.innerText = kelas;

//------------ganti no soal -------------
let selanjutnya = document.querySelector(".buttonmulai");
let datadiri = document.querySelector(".data_diri");

selanjutnya.addEventListener("click", function () {
  let nama = sessionStorage.getItem("nama");
  let nisn = sessionStorage.getItem("nisn");
  let kelas = sessionStorage.getItem("kelas");

  if (nama == null) {
    alert("silahkan login terlebih dahulu");
    window.location = "index.html";
  } else {
    document.getElementById("data").className += " hilang";
    datadiri.className += " hilang";
    document.getElementById("kiri").className = document.getElementById("kiri").className.replace("hilang", "");
    document.getElementById("kanan").className = document.getElementById("kanan").className.replace("hilang", "");
  }
});

//menghilangkan kanan kiri awalan kuis
function readlah() {
  const db = getDatabase();

  var task = ref(db, "kontrolkuis1/");
  let tmp = document.querySelector("body");
  onChildAdded(task, (data) => {
    var taskvalue = data.val();

    if (taskvalue.id == "12093499" && taskvalue.nilai == 0) {
      tmp.innerHTML += '<div class = "full" > <p>HALAMAN TIDAK DAPAT DIAKSES</p> </div>';
      // console.log('0');
    } else {
      // console.log('1');
    }
  });
}

window.onload = () => {
  document.getElementById("kiri").className += " hilang";
  document.getElementById("kanan").className += " hilang";

  readlah();
};

let wktu = document.querySelector("time");
let nilaiwktu = 0;
// countDown();

let countDownDate = new Date().getTime();
//waktu 30 menit
countDownDate += 1801000;
// //waktu 45 menit
// countDownDate += 2700000;
// countDownDate += 12000;
//15 detik
// countDownDate += 17000;
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Perhitungan waktu untuk menit dan detik
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("time").innerHTML = minutes + ":" + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Waktu Selesai";
    nilaiwktu = 1;
  }
}, 1000);

// -----------------------------------------------------------------------------------------
// mengambil data dan menampilkanya

let dat = new XMLHttpRequest();
dat.onreadystatechange = function () {
  let cek = [];
  let jwbs = [];
  let hasilakhir = 0;
  let benarr = 0;
  let salahh = 0;

  if (dat.readyState == 4 && dat.status == 200) {
    // tankap apapun responsnya tangkap,lalu diubah ke objeck
    let data = JSON.parse(this.responseText);
    // melihat data
    // console.log(data);

    // ---------------------------------
    // acak urutan soal
    //RANDOM URUTAN SOAL
    for (let x = 0; x < 100; x++) {
      // acak angka dengan batas length.data dan minimum 0
      let angka = Math.floor(Math.random() * data.length) + 0;
      cek.push(angka);
    }
    // membuang angka yang sama
    cek = Array.from(new Set(cek));
    console.log(cek);
    // ---------------------------------
    // ambil data tertentu

    for (let i = 0; i < cek.length; i++) {
      let nilai = cek[i];

      let soaldata = data[nilai]["soal" + nilai]["soal"];
      let jwb0 = data[nilai]["soal" + nilai]["a"];
      let jwb1 = data[nilai]["soal" + nilai]["b"];
      let jwb2 = data[nilai]["soal" + nilai]["c"];
      let jwb3 = data[nilai]["soal" + nilai]["d"];

      let bnr = data[nilai]["soal" + nilai]["benar"];

      let jwb = [jwb0, jwb1, jwb2, jwb3];

      jwbs.push(bnr);

      // ---------------------------------
      // // rangkai konten soal;
      // let bg_pertanyaan = document.getElementById('bg_pertanyaan');
      // if (i != 0) {
      //     bg_pertanyaan.className += " hilang";
      // }

      //nomor ke-
      let nomor = document.querySelectorAll(".soal #nomornya");
      nomor[i].innerHTML = i + 1;

      //soal
      let soal = document.querySelectorAll(".bg_pertanyaan #soalnya");
      soal[i].innerHTML = soaldata;

      //pilihan a
      let piliha = document.querySelectorAll(".textnya #pilihannya0");
      piliha[i].innerHTML = jwb0;

      //pilihan b
      let pilihb = document.querySelectorAll(".textnya #pilihannya1");
      pilihb[i].innerHTML = jwb1;

      //pilihan c
      let pilihc = document.querySelectorAll(".textnya #pilihannya2");
      pilihc[i].innerHTML = jwb2;

      //pilihan d
      let pilihd = document.querySelectorAll(".textnya #pilihannya3");
      pilihd[i].innerHTML = jwb3;

      let bg_pertanyaan = document.getElementsByClassName("bg_pertanyaan");

      for (let u = 0; u < bg_pertanyaan.length; u++) {
        if (u != 0) {
          if (bg_pertanyaan[u].className.indexOf("hilang") == -1) {
            bg_pertanyaan[u].className += " hilang";
          }
        }
      }
    }

    let bg_pertanyaan = document.getElementsByClassName("bg_pertanyaan");

    //fungsi tombol lanjut
    let lanjut = document.querySelectorAll(".nav_selanjut");
    for (let y = 0; y < lanjut.length; y++) {
      lanjut[y].addEventListener("click", function () {
        if (lanjut[y].className.indexOf("disable") == -1) {
          if (bg_pertanyaan[y].className.indexOf("hilang") == -1) {
            bg_pertanyaan[y + 1].className = bg_pertanyaan[y + 1].className.replace("hilang", "");
            bg_pertanyaan[y].className += " hilang";
          }
          // console.log(bg_pertanyaan[y+1]);
        }
      });
    }

    //fungsi tombol sebelumnya
    let sebelum = document.querySelectorAll(".nav_sebelum");
    for (let y = 0; y < sebelum.length; y++) {
      sebelum[y].addEventListener("click", function () {
        if (sebelum[y].className.indexOf("disable") == -1) {
          if (bg_pertanyaan[y].className.indexOf("hilang") == -1) {
            bg_pertanyaan[y - 1].className = bg_pertanyaan[y - 1].className.replace("hilang", "");
            bg_pertanyaan[y].className += " hilang";
          }
        }
      });
    }

    //navigasi soal
    let soal_nav = document.querySelectorAll(".soal_nav");
    for (let y = 0; y < soal_nav.length; y++) {
      soal_nav[y].addEventListener("click", function () {
        for (let u = 0; u < bg_pertanyaan.length; u++) {
          if (bg_pertanyaan[u].className.indexOf("hilang") == -1) {
            bg_pertanyaan[u].className += " hilang";
          }
        }
        bg_pertanyaan[y].className = bg_pertanyaan[y].className.replace("hilang", "");
      });
    }

    //mewarnai soal yang sdh dijawab
    let soall = document.querySelectorAll(".soall");
    for (let y = 0; y < soall.length; y++) {
      soall[y].addEventListener("click", function () {
        let pilih = document.querySelectorAll(".bg_pilihan input");
        for (let j = 0; j < pilih.length; j++) {
          pilih[j].addEventListener("click", function () {
            soal_nav[y].className = soal_nav[y].className.replace("belum", "sudah");
          });
        }
      });
    }

    //cek jawaban
    let selesai = document.querySelector(".selesai");
    let pil_user = [];
    let new_jwb_urut = [];
    let new_jwb_urut_no = [];

    selesai.addEventListener("click", function () {
      let sarat = 0;

      for (let t = 0; t < jwbs.length; t++) {
        if (soal_nav[t].className.indexOf("belum") == -1) {
          sarat = sarat + 1;
        }
      }
      // console.log(sarat);

      if (sarat == jwbs.length) {
        // array kunci
        // console.log(jwbs);
        hasilakhir = 0;
        benarr = 0;
        salahh = jwbs.length;

        for (let i = 0; i < jwbs.length; i++) {
          let a = i + 1;
          let namaradio = document.getElementsByName("radio" + a);
          let checked = false;
          for (let j = 0; j < namaradio.length; j++) {
            if (namaradio[j].checked) {
              checked = true;
              pil_user.push(namaradio[j].value);
              if (namaradio[j].value == jwbs[i]) {
                hasilakhir = hasilakhir + 10;
                benarr = benarr + 1;
              } else {
                hasilakhir = hasilakhir;
              }
            }
          }
        }

        for (let i = 0; i < cek.length; i++) {
          for (let j = 0; j < cek.length; j++) {
            if (i == cek[j]) {
              new_jwb_urut.push(pil_user[j]);
              new_jwb_urut_no.push(cek[j]);
            }
          }
        }

        // simpan kedatabase----------
        console.log(nama);
        console.log(nisn);
        console.log(kelas);
        console.log(hasilakhir);
        let waktunya = waktu();
        let harinya = hari();

        createTask(nama, nisn, kelas, hasilakhir, waktunya, harinya, new_jwb_urut);

        let namaget = document.querySelector(".nama");
        namaget.innerText = nama;

        let nisnget = document.querySelector(".nisn");
        nisnget.innerText = nisn;

        let kelasget = document.querySelector(".kelas");
        kelasget.innerText = kelas;

        let hariget = document.querySelector(".hari");
        hariget.innerText = harinya;

        let waktuget = document.querySelector(".waktu");
        waktuget.innerText = waktunya;

        let hasillget = document.querySelector(".hasill");
        hasillget.innerText = hasilakhir;

        let kirihilang = document.querySelector(".kiri");
        kirihilang.className += " hilang";

        let kananhilang = document.querySelector(".kanan");
        kananhilang.className += " hilang";

        let datanya = document.querySelector(".dataaa");
        datanya.className = datanya.className.replace("hilang", "");

        if (hasilakhir < 75) {
          let ulang = document.getElementById("ulang");
          ulang.className = ulang.className.replace("hilang", "");
        } else {
          let materi = document.getElementById("materi");
          materi.className = materi.className.replace("hilang", "");
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Mohon Maaf!",
          text: "Jawablah semua soal !",
        });
        // alert(' Jawablah Semua Soal Terlebih Dahulu!');
      }

      //nilai disimpan ke local storage
      localStorage.setItem("skkuis1", hasilakhir);
      sessionStorage.setItem("skkuis1", hasilakhir);
      // console.log(localStorage);
    });
    // if (hassilakhir > 75){
    //     localStorage.setItem("skkuis1",1);
    // }
  }
};
//pemanggilan soal json
dat.open("GET", "kuis2.json", true);
dat.send();

//FUNGSI WAKTU DAN HARI
var d = new Date();
var t = d.getTime();
var counter = t;

// ambil jamnya
window.setTimeout("waktu()", 1000);

function waktu() {
  var tanggal = new Date();
  setTimeout("waktu()", 1000);
  return tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds();
}

// harinya
function hari() {
  let tanggallengkap = new String();
  let namahari = "Minggu Senin Selasa Rabu Kamis Jumat Sabtu";
  namahari = namahari.split(" ");
  let namabulan = "Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember";
  namabulan = namabulan.split(" ");
  let tgl = new Date();
  let hari = tgl.getDay();
  let tanggal = tgl.getDate();
  let bulan = tgl.getMonth();
  let tahun = tgl.getFullYear();
  tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
  return tanggallengkap;
}

function createTask(nama, nisn, kelas, nilai, waktunya, hari, jwb) {
  counter += 1;
  set(ref(db, "kuis2/" + counter), {
    id: counter,
    nama: nama,
    nisn: nisn,
    kelas: kelas,

    nilai: nilai,
    waktu: waktunya,
    hari: hari,
    jawabannya: jwb,
  });
}
