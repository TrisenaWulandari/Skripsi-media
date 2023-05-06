var tombolMenu = document.getElementsByClassName("tombol-menu")[0];
var menu = document.getElementsByClassName("menu")[0];

tombolMenu.onclick = function () {
  menu.classList.toggle("active");
};

menu.onclick = function () {
  menu.classList.toggle("active");
};

// HOME

let namalink = document.getElementById("namalink");
let userlink = document.getElementById("userlink");
let nisnlink = document.getElementById("nisnlink");
let signoutlink = document.getElementById("signoutlink");
let nama = sessionStorage.getItem("fullname");
let nisn = sessionStorage.getItem("nisn");
var currentUser = null;

// Function;
function getName() {
  if (nama == null) {
    window.location = "index.html";
  } else {
    userlink.innerText = nama;
  }
}

getName();

function Signout() {
  // signoutlink.href = '../index.html';
  sessionStorage.removeItem("nama");
  window.location = "home.html";
}

// window Load

window.onload = function () {
  getName();
  if (currentUser == null) {
    signoutlink.href = "home.html";
  } else {
    userlink.innerText = currentUser.nama;
    signoutlink.innerText = "Sign Out";
  }
};
