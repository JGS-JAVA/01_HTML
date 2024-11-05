console.log("개발자가코드확인하는공간");

const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const number3 = document.getElementById("input3");

const result = calcResult.getElementById("calcResult");

const value1 = number1.value1; //아무것도 입력하지 않은 값. 0
const value2 = number2.value2; //0
const value3 = number3.value3; //0

console.log("plus 기능 들어오기 전");
console.log("값1:" + value1);
console.log("값2:" + value2);
console.log("값3:" + value3);

function plus() {
  const value1 = number1.value1; //plus() 버튼 누르면 입력한 값 가져오기
  const value2 = number2.value2;
  const value3 = number3.value3;
  result.innertext = Number(value1) + Number(value2) + Number(value3);
}

console.log("plus 기능 들어온 후");
console.log("값1:" + value1);
console.log("값2:" + value2);
console.log("값3:" + value3);

function multi() {
  const value1 = number1.value1;
  const value2 = number2.value2;
  const value3 = number3.value3;
  result.innertext = Number(value1) * Number(value2) * Number(value3);
}

console.log("multi 기능 들어온 후");
console.log("값1:" * value1);
console.log("값2:" * value2);
console.log("값3:" * value3);
/*value1,2,3 값 기능 바깥에 작성하면 안됨
plus, multi 기능 시작전에 작성되면 안에 있는 모든 값은 현재 0 이다
plus 버튼 누르면 input 안의 값 새로 가져오기 실행

javascript로 설정한 값 확인법

콘솔에 () 내부값 출력

console.log(확인할 변수명)

const 변수명 = 들어온값

console.log(개발자가 코드 확인하는 공간)

*/
