'use strict'

let buttonTest = document.getElementById('testBtn')

buttonTest.addEventListener('click', checkTest);

function checkTest () {
  let result = 0;

  let a1 = document.getElementById('q1').value;
  if (a1=== '4') {
    result++;
  }
  let a2 = document.getElementById('q2').value;
  if (a2=== '5') {
    result++;
  }
  let a3 = document.getElementById('q3').value;
  if (a3=== '6') {
    result++;
  }
  let a4 = document.getElementById('q4').value;
  if (a4=== '12000') {
    result++;
  }
  let a5 = document.getElementById('q5').value;
  if (a5=== '5') {
    result++;
  }
  if (result === 4) {
  alert("your are passed")
}
  else {
    alert("dude, go to learn % operator")
  }
  }