function checkScore() {
  const score = document.getElementById("score").value;
  const msg = document.getElementById("scoreMsg");

  if (score >= 60) {
    msg.innerText = "합격";
    msg.className = "success";
  } else {
    msg.innerText = "불합격";
    msg.className = "fail";
  }
}
