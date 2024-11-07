/**/
function check4() {
  const age = document.getElementById("inputAge").value;

  if (age >= 0 && age <= 13) {
    alert("어린이");
  } else if (age >= 19 && age <= 120) {
    alert("성인");
  } else if (age >= 14 && age <= 18) {
    alert("청소년");
  } else {
    alert("잘못입력");
  }
}
