// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
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
const pass = document.getElementById("passInp");
const nip = document.getElementById("nipInp");
//   const nama = document.getElementById("namaInp");
const submit = document.getElementById("sub_btn");

function AuthenticateUser() {
  const dbRef = ref(db);

  get(child(dbRef, "DataGuru/" + nip.value)).then((snapshot) => {
    if (snapshot.exists()) {
      let dbnip = snapshot.val().nip;
      // let dbnamag = snapshot.val().nama;
      let dbpass = snapshot.val().pass;

      if (dbnip == nip.value && dbpass == pass.value) {
        sessionStorage.setItem("nip", dbnip);
        //   sessionStorage.setItem("nama", dbnama);
        sessionStorage.setItem("passdbpass", dbpass);
        //berhasil
        window.location = "HalamanGuru.html";
      } else {
        alert("NIP atau Password yang anda masukkan salah");
      }
    } else {
      alert("Anda belum terdaftar");
    }
  });
}

// //submit
// submit.addEventListener("click", AuthenticateUser);

// function masuksiswa() {
window.location = "HalamanGuru.html";
// }

// masuksiswa();
