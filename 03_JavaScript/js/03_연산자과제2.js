const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const mp = document.getElementById("inputMp");
const tp = document.getElementById("inputTp");
const msg = document.getElementById("msg");

/*둘 다 작성안하면 작성해라 메시지 뜸
하나라도 작성하면 메시지 안뜸
id = member01 
pw = pass01*/
function signUp() {
  mp.value || tp.value
    ? (msg.style.display = "none")
    : (msg.style.display = "block");

  function login() {
    const id = inputId.value;
    const pw = inputPw.value;
    const success = "로그인 성공";
    const fail = "로그인 실패";
    "member01" == id && "pass01" == pw ? alert(success) : alert(fail);
  }

  pn || tn
    ? alert("번호를 입력했네요")
    : (msg.style.display = "폰번이나 전번 입력하세요");
}
