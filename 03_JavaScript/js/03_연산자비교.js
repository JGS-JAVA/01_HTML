/*두 수 같은지 비교




*/
const v1 = document.getElementById("number1");
const v2 = document.getElementById("number2");
const r1 = document.getElementById("result1");

function 비교하기1() {
  r1.innerText = v1.value == v2.value ? "같습니다." : "다릅니다.";
  r1.style.color = v1.value == v2.value ? "orange" : "red";
  r1.style.backgroundColor = v1.value == v2.value ? "black" : "white";
}
/*
3항 연산자
(   두 값 비교   ) ? "    true 일때 보이는 글    "  : "  false 일때 보이는 글       "  ;
input3 input4 result2 담을 변수명 설정*/
const in3 = document.getElementById("input3");
const in4 = document.getElementById("input4");
const r2 = document.getElementById("result2");

function 비교하기2() {
  r2.innerText =
    in3.value >= in4.value
      ? "왼쪽이 더 크다"
      : "오른쪽이 더 크거다 두 수가 같다";
  r2.style.color = in3.value >= in4.value ? "yellowgreen" : "lightblue";
}
