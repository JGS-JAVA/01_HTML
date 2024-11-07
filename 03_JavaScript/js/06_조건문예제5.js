function checkSeason() {
  const month = document.getElementById("month").value;
  const msg = document.getElementById("seasonMsg");

  msg.innerText = "계절 : ";
  if (3 <= month && month <= 5) {
    msg.innerText += "봄이다";
    msg.className = "봄";
  } else if (6 <= month && month <= 8) {
    msg.innerText += "여름이다";
    msg.className = "여름";
  } else if (9 <= month && month <= 11) {
    msg.innerText += "가을이다";
    msg.className = "가을";
  } else {
    msg.innerText += "겨울이다";
    msg.className = "겨울";
  }
}
