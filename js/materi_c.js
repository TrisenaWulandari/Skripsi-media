var numQues = 5;
var numChoi = 4;
var answers = new Array(3);
answers[0] = "c";
answers[1] = "b";
answers[2] = "b";
answers[3] = "a";
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

//drag and drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
