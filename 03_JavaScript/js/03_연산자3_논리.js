/*
document.get 설정 맨위 작성하기, value 제외
id, pw input에 작성된 값 가져오기할 때 Number로 감싸줄 필요 없다
아이디 member01
  비번 pass01

*/

const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
function login() {
  const id = inputId.value;
  const pw = inputPw.value;
  const success = "로그인 성공";
  const fail = "로그인 실패-------------";
  "member01" == id && "pass01" == pw ? alert(success) : alert(fail);
}
function checkNumber() {
  const pn = document.getElementById("phone").value;
  const tn = document.getElementById("tel").value;
  const msg = document.getElementById("msg");
  //삼항 연산자 입력여부 확인후 메시지 표시/숨기기
  pn || tn ? alert("번호를 입력했네요") : (msg.style.display = "block");
}
