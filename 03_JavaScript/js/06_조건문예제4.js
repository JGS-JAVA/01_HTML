/*
 */
function checkGrade() {
  const score = document.getElementById("inputScore").value;

  if (score >= 90) {
    alert("A");
  } else if (score >= 80) {
    alert("B");
  } else if (score >= 70) {
    alert("C");
  } else if (score >= 60) {
    alert("D");
  } else {
    alert("F");
  }
}
