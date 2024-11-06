const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");

function login() {
  const id = inputId.value;
  const pw = inputPw.value;
  const success = "로그인 성공";
  const fail = "로그인 실패";
  "member01" == id && "pass01" == pw ? alert(success) : alert(fail);
}
function checkNumber() {
  const pn = document.getElementById("phone").value;
  const tn = document.getElementById("tel").value;
  const msg = document.getElementById("msg");

  pn || tn
    ? alert("번호를 입력했네요")
    : (msg.style.display = "폰번이나 전번 입력하세요");
}
