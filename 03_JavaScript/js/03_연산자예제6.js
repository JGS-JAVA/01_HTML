function checkPw() {
  const pw = document.getElementById("inputPw").value;
  const pwConfirm = document.getElementById("inputPwConfirm").value;
  const success = "비번 일치";
  const fail = "비번 불일치";
  pw == pwConfirm ? alert("일치") : alert("불일치");
  pw == "pass1234!" && pwConfirm == "pass1234!"
    ? alert("success")
    : alert("fail");
}
