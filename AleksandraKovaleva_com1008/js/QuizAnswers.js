
//function that reveals the answers by making the hidden
//span elements visibile
function reveal(answer) {
  if (answer.style.display == 'inline') {
    answer.style.display = 'none';
  } 
  else {
    var allAnswers = document.querySelectorAll(".hidden-answers");
    for (var i = 0, len = allAnswers.length; i < len; i++) {
      allAnswers[i].style.display = 'none';
    }
    answer.style.display = 'inline';
  }

}

//Question 1 
var OptionA = document.getElementById("Q-A");
var OptionB = document.getElementById("Q-B");
var OptionC = document.getElementById("Q-C");
var OptionD = document.getElementById("Q-D");

//event listeners handling both touch and mouse
OptionA.addEventListener('click',questionA);
OptionA.addEventListener('touchstart',questionA);

OptionB.addEventListener('click',questionB);
OptionB.addEventListener('touchstart',questionB);

OptionC.addEventListener('click',questionC);
OptionC.addEventListener('touchstart',questionC);

OptionD.addEventListener('click',questionD);
OptionD.addEventListener('touchstart',questionD);


//depending on which answer the user clicked it will 
//reveal the spanner attached to it
function questionA(evt) {
  evt.preventDefault();
  var answer = document.getElementById('Answer-1');
  reveal(answer);
}

function questionB(evt) {
  evt.preventDefault();
  var answer = document.getElementById('Answer-2');
  reveal(answer);
}

function questionC(evt) {
  evt.preventDefault();
  var answer = document.getElementById('Answer-3');
  reveal(answer);
}

function questionD(evt) {
  evt.preventDefault();
  var answer = document.getElementById('Answer-4');
  reveal(answer);
}

//Question 2
var Option2A = document.getElementById("Q2-A");
var Option2B = document.getElementById("Q2-B");
var Option2C = document.getElementById("Q2-C");
var Option2D = document.getElementById("Q2-D");

Option2A.addEventListener('click',question2A);
Option2A.addEventListener('touchstart',question2A);

Option2B.addEventListener('click',question2B);
Option2B.addEventListener('touchstart',question2B);

Option2C.addEventListener('click',question2C);
Option2C.addEventListener('touchstart',question2C);

Option2D.addEventListener('click',question2D);
Option2D.addEventListener('touchstart',question2D);

function question2A(evt) {
  evt.preventDefault();
  var answer = document.getElementById('Answer2-1');
  reveal(answer);
}

function question2B(evt) {
  evt.preventDefault();
  var answer = document.getElementById('Answer2-2');
  reveal(answer);
}

function question2C(evt) {
  evt.preventDefault();
  var answer = document.getElementById('Answer2-3');
  reveal(answer);
}

function question2D(evt) {
  evt.preventDefault();
  var answer = document.getElementById('Answer2-4');
  reveal(answer);
}


//Question 3
var Option3A = document.getElementById("Q3-A");
var Option3B = document.getElementById("Q3-B");
var Option3C = document.getElementById("Q3-C");
var Option3D = document.getElementById("Q3-D");

Option3A.addEventListener('click',question3A);
Option3A.addEventListener('touchstart',question3A);

Option3B.addEventListener('click',question3B);
Option3B.addEventListener('touchstart',question3B);

Option3C.addEventListener('click',question3C);
Option3C.addEventListener('touchstart',question3C);

Option3D.addEventListener('click',question3D);
Option3D.addEventListener('touchstart',question3D);

function question3A(evt) {
  evt.preventDefault();
  var answer = document.getElementById('Answer3-1');
  reveal(answer);
}

function question3B(evt) {
  evt.preventDefault();
  var answer = document.getElementById('Answer3-2');
  reveal(answer);
}

function question3C(evt) {
  evt.preventDefault();
  var answer = document.getElementById('Answer3-3');
  reveal(answer);
}

function question3D(evt) {
  evt.preventDefault();
  var answer = document.getElementById('Answer3-4');
  reveal(answer);
}

