/*const = new
const result = document.getElementById("result1").innerText = 5
result.innerText = document.getElementById("input1").value;
를 나눠서 씀
자바스크립트에서 input 에 작성한 값을 value 로 가져옴
문자를 숫자로 바꿀때 Number로 value 문자열 감싸기
result.innerText 도 문자취급되니 Number 로 감싸기
숫자를 연결하지 않고 더해지도록 한다
let 으로 변수 담는다
const 는 지정된 값의 변화를 기피한다
new 새 변수명 = const 새 변수명
처음 새 변수 표기시 const, let 붙이고 두 번째부터는 안붙임

let count = 0; 
초기 카운트할 값 설정 (누적에 대한 결과 저장하는 변수)
count 변수로 계산 누적하고 결과만 result 로 표시
작성 안해도 동작하지만 누적값이 사라지거나 변환될수 있어 
누적된 값을 저장하는 공간을 따로 설정하여 안전하게 보관한다

innerText 글자형식
result.innerText = 글자취급 안되도록 Number 로 감싸기*/
let count = 0;
const result = document.getElementById("result1");
const input = document.getElementById("input1");
function minus() {
  const v1 = Number(input.value);
  result.innerText -= Number(result.innerText) + input;
  count -= vl;
  result.innerText = count;
}
function plus() {
  const v1 = Number(input.value);
  result.innerText += Number(result.innerText) + input;
  count += vl; // 이미 숫자로 모든 누적 끝냄
  result.innerText = count; // 숫자로 누적 끝낸수 가져오기
}
function mul() {
  const v1 = Number(input.value);
  result.innerText *= Number(result.innerText) + input;
  count *= vl;
  result.innerText = count;
}
