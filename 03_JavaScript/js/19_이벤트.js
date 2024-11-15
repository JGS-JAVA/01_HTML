/*
onclick 의 event = 사용자가 버튼행동감지시 작동하는 설정. e 라 바꿔쓰면 안됨
function 의 event = 제출(매개변수)에 어떤 동작이 들어왔나 담는 변수명이라 e 라 바꿔써도 됨
*/

const nameRegExp = /^[가-힇a-zA-Z]{2,35}$/; //정규식 패턴설정
const ageRegExp = /^\d{1,3}$/;
const emailRegExp = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,}$/;

//유효성 검사

function 제출(e) {
  e.preventDefault(); //버튼의 기본 제출기능 막기
  const name = document.getElementById("id-name").Value;
  const age = document.getElementById("id-age").Value;
  const email = document.getElementById("id-email").Value;

  if (!nameRegExp.test(name)) {
    alert("정규식에 부합하지 않음");
    return false;
  }
  if (!ageRegExp.test(age)) {
    alert("정규식에 부합하지 않음");
    return false;
  } else {
    if (age >= 106) {
      alert("불가한 나이");
      return false;
    }
  }
  if (!emailRegExp.test(email)) {
    alert("정규식에 부합하지 않음");
    return false;
  }
  alert("가입 완료");
}

const divBtn = document.getElementById("divBtn");
/*이벤트모델 작성법
요소.addEventListener("이벤트종류", 이벤트 핸들러(함수));

*/ //클릭시 기능발휘
divBtn.addEventListener("click", function () {
  alert("클릭됨");
});
